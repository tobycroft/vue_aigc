import axios from 'axios';
import Alert from "@/plugins/Alert";
import TokenModel from "@/model/TokenModel";

const baseURL = 'https://aigc.aerofsx.com:444';

class Net {
    header = {};

    constructor(path) {
        this.apiEndpoint = baseURL + path;
        this.headers = TokenModel.Api_find_uidAndToken();
    }

    async PostFormData(params = {}) {
        // 创建一个 FormData 对象
        const formData = new FormData();

        // 将对象的键值对添加到 FormData
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                formData.append(key, params[key]);
            }
        }
        this.headers['Content-Type'] = 'multipart/form-data';

        const response = await axios.post(this.apiEndpoint, formData, {
            headers: this.headers,
        });
        return new Ret(response.data);
    }

    async Post(params = {}) {
        const formData = new FormData();

        // 将对象的键值对添加到 FormData
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                formData.append(key, params[key]);
            }
        }
        this.headers['Content-Type'] = 'multipart/form-data';

        const response = await axios.post(this.apiEndpoint, formData, {
            headers: this.headers,
        });
        return new Ret(response.data);
    }

    async Get(params = {}) {
        const response = await axios.get(this.apiEndpoint, {
            headers: this.headers,
            params: params, // 可选：如果有查询参数，通过 params 传递
        });

        // 处理响应数据
        return new Ret(response.data);
    }

}

class Ret {
    isSuccess = false;
    code = 0;
    data;
    echo = '';

    constructor(ret) {
        this.code = ret["code"];
        this.data = ret["data"];
        this.echo = ret["echo"];
        switch (ret["code"]) {
            case 0:
                this.isSuccess = true;
                break;


            case -1:
                localStorage.clear();
                Alert.SetAlert(ret["echo"])
                Alert.SetGo("/user/register")
                break;


            default:
                if (ret["code"] > 0) {
                    Alert.SetAlert(ret["echo"])
                } else if (ret["code"] < 0) {
                    Alert.SetAlert(ret["echo"])
                } else {

                }
                break;
        }
    }

    GetData() {
        if (!this.isSuccess) {
            return this.data;
        } else {
            return null;
        }
    }

    GetVutifySelectMap() {
        if (!this.isSuccess) {
            return this.data.map(data => ({id: data.team_info.id, title: data.team_info.name}))
        } else {
            return null;
        }
    }
}

export default Net;

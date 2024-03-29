class Qqimagedealer {
  static GetPath(fullUrl) {
    const urlObject = new URL(fullUrl);
// 获取路径部分
    const pathPart = urlObject.pathname;
    return "//image.tuuz.cc:81/qlogo" + pathPart
  }
}


export default Qqimagedealer

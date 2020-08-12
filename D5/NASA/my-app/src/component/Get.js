export default  function Get(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, false); //false表示同步请求
    request.send(null);
    if (request.status !== 200) {
      throw new Error("..");
    }
    return JSON.parse(request.responseText);
  }
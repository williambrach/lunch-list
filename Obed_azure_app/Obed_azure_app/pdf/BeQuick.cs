using HtmlAgilityPack;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Obed_azure_app.pdf
{
  class BeQuick
  {
    public static async Task<string> startCrawlerasync()
    {
      var httpClient = new HttpClient();
      var html = await httpClient.GetStringAsync("https://ranajky-obedy.sk/obedove-menu/");
      var htmlDocument = new HtmlDocument();
      htmlDocument.LoadHtml(html);
      //var ar = htmlDocument.DocumentNode.SelectSingleNode("//*[@class='aio-tooltip 5f501e59ceabc']");
      var list = htmlDocument.DocumentNode.SelectNodes("//div[@class='align-icon']/a[string-length(@href)>0]");
      string url = "";
      foreach (var obj in list)
      {
       url = obj.SelectSingleNode(".").Attributes["href"].Value;
       }
        JObject o = new JObject();
        o["link"] = url.Replace("http","https") +"#toolbar=0&navpanes=0&scrollbar=0";
        return o.ToString();
    }
  }
}


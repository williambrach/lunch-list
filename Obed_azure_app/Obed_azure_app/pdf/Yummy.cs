using HtmlAgilityPack;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Obed_azure_app.pdf
{
  class Yummy
  {
    public static async Task<string> startCrawlerasync(string url)
    {
      var httpClient = new HttpClient();
      var html = await httpClient.GetStringAsync(url);
      var htmlDocument = new HtmlDocument();
      htmlDocument.LoadHtml(html);
      var ar = htmlDocument.DocumentNode.SelectSingleNode("//*[@class='elementor-flip-box__layer elementor-flip-box__back']");
      JObject o = new JObject();
      o["link"] = ar.Attributes["href"].Value + "#toolbar=0&navpanes=0&scrollbar=0";
      return o.ToString();
    }
  }
}

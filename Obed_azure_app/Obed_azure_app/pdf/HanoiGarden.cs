using HtmlAgilityPack;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Obed_azure_app.pdf
{
  class HanoiGarden
  {
    public static async Task<string> startCrawlerasync(string url)
    {
      var httpClient = new HttpClient();
      var html = await httpClient.GetStringAsync(url);
      var htmlDocument = new HtmlDocument();
      htmlDocument.LoadHtml(html);
      string innerText = null;


    

      Dictionary<string, string> imgs = new Dictionary<string, string>();
      var images = htmlDocument.DocumentNode.SelectSingleNode("//*[@title='Obedové menu pondelok 1']");
      imgs.Add("1", "https://www.hanoigarden.sk/" + images.Attributes["src"].Value.Trim());
      images = htmlDocument.DocumentNode.SelectSingleNode("//*[@title='Obedové menu utorok 1']");
      imgs.Add("2", "https://www.hanoigarden.sk/" + images.Attributes["src"].Value.Trim());
      images = htmlDocument.DocumentNode.SelectSingleNode("//*[@title='Obedové menu streda 1']");
      imgs.Add("3", "https://www.hanoigarden.sk/" + images.Attributes["src"].Value.Trim());
      images = htmlDocument.DocumentNode.SelectSingleNode("//*[@title='Obedové menu štvrtok 1']");
      imgs.Add("4", "https://www.hanoigarden.sk/" + images.Attributes["src"].Value.Trim());
      images = htmlDocument.DocumentNode.SelectSingleNode("//*[@title='Obedové menu piatok 1']");
      imgs.Add("5", "https://www.hanoigarden.sk/" + images.Attributes["src"].Value.Trim());


      string json = JsonConvert.SerializeObject(imgs);
      return json;
    }
  }
}

using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using HtmlAgilityPack;
using System.Net.Http;
using System.Linq;
using System.Collections.Generic;
using Obed_azure_app.sme;

using Obed_azure_app.pdf;


namespace Obed_azure_app
{
  public static class Function1
  {
    [FunctionName("Function1")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
      log.LogInformation("C# HTTP trigger function processed a request.");

      string name = req.Query["name"];

      string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
      dynamic data = JsonConvert.DeserializeObject(requestBody);
      name = name ?? data?.name;

      string response = null;
        switch (name.ToLower())
        {
          case "veglife":
            response = await Veglife.startCrawlerasync("https://restauracie.sme.sk/restauracia/veg-life-prievozska_8702-ruzinov_2980");
            break;
          case "mlyn":
            response = await Mlyn.startCrawlerasync("https://restauracie.sme.sk/restauracia/mlyn-restaurant_1745-ruzinov_2980");
            break;
          case "rotunda":
            response = await Rotunda.startCrawlerasync("https://restauracie.sme.sk/restauracia/pizzeria-rotunda_2316-ruzinov_2980");
            break;
          case "bequick":
            response = await BeQuick.startCrawlerasync("https://ranajky-obedy.sk/obedove-menu/");
            break;
          case "oravec":
            response = await Oravec.startCrawlerasync("https://www.menucka.sk/widget/main/gurmanskydvor/weekmenu");
            break;
          case "yummy":
            response = await Yummy.startCrawlerasync("https://yummycantina.sk/prevadzky/yummy-1/");
          break;
          case "rebecca":
            break;
          case "hanoi":
          response = await HanoiGarden.startCrawlerasync("http://www.hanoigarden.sk/prievozska.html");
            break;
          default:
            return new BadRequestObjectResult("Wrong get.");
        }

      return new OkObjectResult(response);

    }
  }

}

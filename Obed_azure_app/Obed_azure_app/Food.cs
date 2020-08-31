using System;
using System.Collections.Generic;
using System.Text;

namespace Obed_azure_app
{
  class Food
  {

    public string name { get; set; }
    public string price { get; set; }

    public Food(string name, string price) {
      this.name = name;
      this.price = price;
    }
  }
}

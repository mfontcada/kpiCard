HTMLWidgets.widget({

  name: 'kpiCard',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // Remove previous
        el.innerHTML = "";

        // Card
        var card = d3.select(el).append("div")
          .style("width", "100%")
          .style("height", "100%")
          .style("font-family", 'Verdana, Geneva, sans-serif')
          .style("border", "1px solid #000");

        // Header
        var header = card.append("div")
          .style("width", "100%")
          .style("height", "32px")
          .style("border-bottom", "1px solid #000");

        // Title
        var title = header.append("div")
          .style("padding", "8px")
          .style("line-height", "16px")
          .style("font-size", "0.8em")
          .html("title");

        // Content
        var content = card.append("div")
          .style("width", "100%")
          .style("height", "calc(100% - 32px)");

        // Values
        var values = content.append("div")
          .style("float", "left")
          .style("width", "50%")
          .style("height", "100%");

        // New value
        values.append("div")
          .style("width", "100%")
          .style("height", "60%")
          .style("display", "table")
          .append("div")
            .style("display", "table-cell")
            .style("vertical-align", "bottom")
            .style("padding-bottom", "2vw")
            .style("text-align", "center")
            .style("font-size", "5vw")
            .html("new value");

        // Old value
        values.append("div")
          .style("width", "100%")
          .style("height", "40%")
          .style("display", "table")
          .append("div")
            .style("display", "table-cell")
            .style("vertical-align", "top")
            .style("padding-top", "2vw")
            .style("text-align", "center")
            .style("font-size", "2.5vw")
            .html("old value");

        // Change
        var change = content.append("div")
          .style("float", "right")
          .style("width", "50%")
          .style("height", "100%");

        // Percent
        change.append("div")
          .style("width", "100%")
          .style("height", "60%")
          .style("display", "table")
          .append("div")
            .style("display", "table-cell")
            .style("vertical-align", "bottom")
            .style("padding-bottom", "2vw")
            .style("text-align", "center")
            .style("font-size", "5vw")
            .html("change percent");

        // Difference
        change.append("div")
          .style("width", "100%")
          .style("height", "40%")
          .style("display", "table")
          .append("div")
            .style("display", "table-cell")
            .style("vertical-align", "top")
            .style("padding-top", "2vw")
            .style("text-align", "center")
            .style("font-size", "2.5vw")
            .html("change number");

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});

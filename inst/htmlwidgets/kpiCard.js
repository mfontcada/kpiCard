HTMLWidgets.widget({

  name: 'kpiCard',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // Recover data
        var change_num = x.new_value - x.old_value;
        var change_pt = change_num / x.old_value * 100;
        var change_color = "black",
          change_symbol = "";
        if (change_pt > 0) {
          change_color = x.color_up;
          change_symbol = "&#9650;";
        } else if (change_pt < 0) {
          change_color = x.color_down;
          change_symbol = "&#9660;";
        }

        // Remove previous
        el.innerHTML = "";

        // Card
        var card = d3.select(el).append("div")
          .style("width", "100%")
          .style("height", "100%")
          .style("font-family", 'Verdana, Geneva, sans-serif');

        // Header
        var header = card.append("div")
          .style("width", "100%")
          .style("height", "32px")
          .style("border-bottom", "1px solid #DDD");

        // Title
        var title = header.append("div")
          .style("padding", "8px")
          .style("line-height", "16px")
          .style("font-size", "0.8em")
          .html(x.title);

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
            .style("padding-bottom", "6px")
            .style("text-align", "center")
            .style("font-size", "1.2em")
            .html(x.new_value.toLocaleString(x.locale));

        // Old value
        values.append("div")
          .style("width", "100%")
          .style("height", "40%")
          .style("display", "table")
          .append("div")
            .style("display", "table-cell")
            .style("vertical-align", "top")
            .style("padding-top", "3px")
            .style("text-align", "center")
            .style("font-size", "0.8em")
            .html(x.old_value.toLocaleString(x.locale));

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
            .style("padding-bottom", "6px")
            .style("text-align", "center")
            .style("font-size", "1.2em")
            .html(change_symbol + " " + (Math.round(Math.abs(change_pt) * 10) / 10).toLocaleString(x.locale) + "%")
            .style("color", change_color);

        // Difference
        change.append("div")
          .style("width", "100%")
          .style("height", "40%")
          .style("display", "table")
          .append("div")
            .style("display", "table-cell")
            .style("vertical-align", "top")
            .style("padding-top", "3px")
            .style("text-align", "center")
            .style("font-size", "0.8em")
            .html(function() {
              if (change_num > 0) {
                return "(" + "+" + change_num.toLocaleString(x.locale) + ")";
              } else {
                return "(" + change_num.toLocaleString(x.locale) + ")";
              }
            })
            .style("color", change_color);

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});

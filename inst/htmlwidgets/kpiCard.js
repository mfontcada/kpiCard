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
        if (change_num > 0) {
          change_color = x.color_up;
          change_symbol = "&#9650;";
        } else if (change_num < 0) {
          change_color = x.color_down;
          change_symbol = "&#9660;";
        }

        if (x.percent === true) {
          change_num = Math.round(change_num * 1000) / 10;
        } else {
          change_num = Math.round(change_num * 10) / 10;
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
          .style("position", "relative")
          .style("width", "100%")
          .style("height", "32px")
          .style("border-bottom", "1px solid #DDD");

        // Title
        var title = header.append("div")
          .style("float", "left")
          .style("padding", "8px")
          .style("line-height", "16px")
          .style("font-size", "0.8em")
          .html(x.title);

        // Info
        var info = header.append("div")
          .attr("class", "info")
          .style("display", function() {
            if (x.info === null) {
              return("none");
            } else {
              return("block");
            }
          });
        var info_button = info.append("div")
          .attr("class", "infoButton")
          .style("float", "right")
          .style("padding", "8px")
          .style("line-height", "16px")
          .style("font-size", "0.8em")
          .style("font-weight", "bold")
          .style("text-align", "center")
          .style("cursor", "pointer")
          .style("color", "#AAA")
          .on("mouseover", function() {
            var infoText = d3.select(this.parentNode).selectAll(".infoText");
            infoText.style("display", "block");
          })
          .on("mouseout", function() {
            var infoText = d3.select(this.parentNode).selectAll(".infoText");
            infoText.style("display", "none");
          })
          .html("?");
        var info_text = info.append("div")
          .attr("class", "infoText")
          .style("z-index", 999)
          .style("position", "absolute")
          .style("top", "36px")
          .style("right", "0")
          .style("border", "1px solid #DDD")
          .style("padding", "12px")
          .style("text-align", "center")
          .style("font-size", "0.8em")
          .style("background-color", "#FFF")
          .style("box-shadow", "3px 6px 6px #CCC")
          .style("display", "none")
          .html(x.info);

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
            .html(function() {
              if (x.percent === true) {
                return (Math.round(x.new_value * 1000) / 10).toLocaleString(x.locale) + "%";
              } else {
                return x.new_value.toLocaleString(x.locale);
              }
            });

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
            .html(function() {
              if (x.percent === true) {
                return (Math.round(x.old_value * 1000) / 10).toLocaleString(x.locale) + "%";
              } else {
                return x.old_value.toLocaleString(x.locale);
              }
            });

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
            .html(function() {
              if (isNaN(change_pt)) {
                return "- %";
              } else {
                return change_symbol + " " + (Math.round(Math.abs(change_pt) * 10) / 10).toLocaleString(x.locale) + "%";
              }
            })
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

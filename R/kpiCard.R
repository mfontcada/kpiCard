#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
kpiCard <- function(title, new.value, old.value,
                    color.up = "green", color.down = "red", locale = "es",
                    width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x = list(
    title = title,
    new_value = new.value,
    old_value = old.value,
    color_up = color.up,
    color_down = color.down,
    locale = locale
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'kpiCard',
    x,
    width = width,
    height = height,
    package = 'kpiCard',
    elementId = elementId
  )
}

#' Shiny bindings for kpiCard
#'
#' Output and render functions for using kpiCard within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a kpiCard
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name kpiCard-shiny
#'
#' @export
kpiCardOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'kpiCard', width, height, package = 'kpiCard')
}

#' @rdname kpiCard-shiny
#' @export
renderKpiCard <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, kpiCardOutput, env, quoted = TRUE)
}

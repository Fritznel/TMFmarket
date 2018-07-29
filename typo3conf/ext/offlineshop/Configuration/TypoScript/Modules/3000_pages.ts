config.contentObjectExceptionHandler = 0
page = PAGE
## Meta-Tags in <head>
page.meta{
  X-UA-Compatible = IE=edge
  X-UA-Compatible.httpEquivalent = 1

  viewport = width=device-width, initial-scale=1, shrink-to-fit=no
  description.field = description
  description.ifEmpty = You are on Cange Supermarket Website
  author.field= author
  author.ifEmpty= F. Römer
}
## Favicon einbinden
page.shortcutIcon = EXT:offlineshop/Resources/Public/Icons/favicon.ico

## CSS einbinden
page.includeCSS {
  10 = EXT:offlineshop/Resources/Public/Css/bootstrap-flex.min.css
  20 = EXT:offlineshop/Resources/Public/Css/sm-core-css.css
  30 = EXT:offlineshop/Resources/Public/Css/sm-simple.css
  40 = EXT:offlineshop/Resources/Public/Css/smartmenu.css
  50 = EXT:offlineshop/Resources/Public/Css/mystyles.css

}
##JavaScript einbinden
page.includeJSFooterlibs {
  10 = EXT:offlineshop/Resources/Public/JavaScript/jquery-3.1.1.min.js
  ##10 = http://code.jquery.com/jquery-3.1.1.min.js
  ##10.external = 1
  10.disableCompression = 1
}

page.includeJSFooter {
  10 = EXT:offlineshop/Resources/Public/JavaScript/bootstrap.min.js
  10.disableCompression = 1

  20 = EXT:offlineshop/Resources/Public/JavaScript/jquery.smartmenus.min.js
  20.disableCompression = 1

  30 = EXT:offlineshop/Resources/Public/JavaScript/custom.js
}

page.10 = FLUIDTEMPLATE
page.10 {
  layoutRootPath = EXT:offlineshop/Resources/Private/Layouts/
  partialRootPath = EXT:offlineshop/Resources/Private/Partials/

  file = EXT:offlineshop/Resources/Private/Templates/Default.html

  variables {

    content0 = CONTENT
    content0 {
          table = tt_content
          select.where = colPos = 0
          select.orderBy = sorting
        }
    content1 < .content0
    content1.select.where = colPos=1

    content2 < .content0
    content2.select.where = colPos=2

    content3 < .content0
    content3.select.where = colPos=3

    content5 < .content0
    content5.select.where = colPos=5

    content6 < .content0
    content6.select.where = colPos=6

    content7 < .content0
    content7.select.where = colPos=7

    content8 < .content0
    content8.select.where = colPos=8

    backendlayout = CASE
    backendlayout {
      key.data = pagelayout

      pagets__jumbotron = TEXT
      pagets__jumbotron.value = jumbotron

      pagets__2spalten = TEXT
      pagets__2spalten.value = 2spalten

      pagets__1spalte = TEXT
      pagets__1spalte.value = 1spalte

      default < .pagets__2spalten
    }
    siteTitle = TEXT
    siteTitle {
      value = Cange Supermarket
      stdWrap.typolink.parameter = t3://page?uid=1
      stdWrap.typolink.title = Retour sur Homepage
      wrap = <h2 class="nav-brand">|</h2>
    }

  }
}

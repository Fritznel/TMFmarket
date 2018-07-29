lib.rootline = HMENU
lib.rootline {

  special = rootline
  special.range = 1|-2
  wrap =<div class="container rootline"><ol class="breadcrumb">|</ol></div>

1 = TMENU
1 {
  expAll = 1
  NO = 1
  NO {
    allwrap = <li class="breadcrumb-item">|</li>
    stdWrap.htmlSpecialChars = 1
    ATagTitle.field = description // subtitle // title
  }
  CUR < .NO
  CUR {
    doNotLinkIt = 1
    allWrap = <li class="breadcrumb-item active">|</li>
    }
  }
}
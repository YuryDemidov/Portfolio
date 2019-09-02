var previewPicture = document.querySelectorAll('.preview__picture');
var sitePicture = document.querySelectorAll('.site__picture');
var borderBlock = document.querySelectorAll('.preview');
var siteInfo = document.querySelectorAll('.site__info');
var previewDescription = document.querySelectorAll('.preview__description');

var rebuildSite = function(visibleLeftColumn, unvisibleLeftColumn, leftBlockBorder, visibleRightColumn, unvisibleRightColumn, siteNumber) {
    visibleLeftColumn[siteNumber].addEventListener('click', function() {
      visibleLeftColumn[siteNumber].classList.add('preview__picture--invisible');
      unvisibleLeftColumn[siteNumber].classList.add('site__picture--visible');
      leftBlockBorder[siteNumber].classList.add('preview--active');
      visibleRightColumn[siteNumber].classList.add('site-info--invisible');
      unvisibleRightColumn[siteNumber].classList.add('preview__description--visible');
    });
  return;
}

var goBackPlease = function(visibleLeftColumn, unvisibleLeftColumn, leftBlockBorder, visibleRightColumn, unvisibleRightColumn, siteNumber) {
    unvisibleLeftColumn[siteNumber].addEventListener('click', function() {
      visibleLeftColumn[siteNumber].classList.remove('preview__picture--invisible');
      unvisibleLeftColumn[siteNumber].classList.remove('site__picture--visible');
      leftBlockBorder[siteNumber].classList.remove('preview--active');
      visibleRightColumn[siteNumber].classList.remove('site-info--invisible');
      unvisibleRightColumn[siteNumber].classList.remove('preview__description--visible');
    });
}

rebuildSite(previewPicture, sitePicture, borderBlock, siteInfo, previewDescription, 0);
rebuildSite(previewPicture, sitePicture, borderBlock, siteInfo, previewDescription, 1);
goBackPlease(previewPicture, sitePicture, borderBlock, siteInfo, previewDescription, 0);
goBackPlease(previewPicture, sitePicture, borderBlock, siteInfo, previewDescription, 1);

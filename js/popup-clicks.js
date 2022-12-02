// start popup share links
let shareBtn = document.querySelector(".share");
let shareLinks = document.querySelector(".share-links");
let closeShare = document.querySelector(".close-share");

shareBtn.addEventListener("click", () => {
  shareLinks.classList.add("active-share");
});

closeShare.addEventListener("click", () => {
  shareLinks.classList.remove("active-share");
});
// start popup share links

// start download-book
let downloadBtn = document.querySelector(".download");
let downloadBook = document.querySelector(".download-book");
let downloadLink = document.querySelector(".download-link");
let closeDownloadBook = document.querySelector(".close-download-book");

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  downloadBook.classList.add("active-download");

  setTimeout(() => {
    downloadBook.classList.remove("active-download");
    if (!downloadLink.classList.contains("end-download")) {
      downloadLink.classList.add("active-download-link");
    }
  }, 10000);
});

closeDownloadBook.addEventListener("click", () => {
  downloadBook.classList.remove("active-download");
  downloadLink.classList.add("end-download");
});
// end download-book

// start popup download link
let closeDownloadLink = document.querySelector(".close-popup-link");

closeDownloadLink.addEventListener("click", () => {
  downloadLink.classList.remove("active-download-link");
});
// end popup download link

// start popup evaluation
let evaluationBtn = document.querySelector(".evaluation");
let evaluationBox = document.querySelector(".evaluation-box");
let closeEvaluation = document.querySelector(".close-evaluation");

evaluationBtn.addEventListener("click", () => {
  evaluationBox.classList.add("active-evaluation-box");
});

closeEvaluation.addEventListener("click", () => {
  evaluationBox.classList.remove("active-evaluation-box");
});
// end popup evaluation

// start comment-evaluition
let evaluationLineBtns = document.querySelectorAll(".evaluation-line");
let commentEvaluation = document.querySelector(".comment-evaluition");
let closeCommentEvaluation = document.querySelector(
  ".close-comment-evaluation"
);

let btnCloseComment = document.querySelector(".btn-close-comment");

evaluationLineBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    evaluationBox.classList.remove("active-evaluation-box");
    commentEvaluation.classList.add("active-comment-evaluition");
  });
});

closeCommentEvaluation.addEventListener("click", () => {
  commentEvaluation.classList.remove("active-comment-evaluition");
});

btnCloseComment.addEventListener("click", () => {
  commentEvaluation.classList.remove("active-comment-evaluition");
});
// end comment-evaluition

// start repoting box
let btnReproting = document.querySelector(".reproting");
let reportingBox = document.querySelector(".reporting-box");
let closeReporting = document.querySelector(".close-reporting");

btnReproting.addEventListener("click", () => {
  reportingBox.classList.add("active-reporting");
});

closeReporting.addEventListener("click", () => {
  reportingBox.classList.remove("active-reporting");
});
// end reporting box

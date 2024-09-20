import { Slide } from "../types";

export const getSlideNo = (slides: Array<Slide>, slide: Slide) => {
  const activeSlides = slides.filter((slide, idx) => {
    if (idx === 0 || idx == slides.length - 1) {
      return true;
    }
    if (slide?.checked) {
      return true;
    }
    return false;
  });
  const updatedIdx = activeSlides.findIndex((s) => s.id === slide.id);
  return updatedIdx;
};

export function generatePdfHtml(
  slides: Array<{
    id: number;
    title: string;
    subtitle: string;
    checked: boolean;
  }>,
  currentTheme: { background: string; title: string; subtitle: string },
  userInfo: { userName: string; linkedInUsername: string; userImageUrl: string }
) {
  const slidesHtml = slides
    .map((slide, index) => {
      const isFirstOrLastSlide = index === 0 || index === slides.length - 1;
      if (slide.checked) {
        const newIdx = getSlideNo(slides, slide);
        return `
				<div class="page">
					<div class="content">
						${!isFirstOrLastSlide ? `<div class="slide-number">${newIdx}</div>` : ""}
						<h1>${slide.title}</h1>
						<p>${slide.subtitle}</p>
					</div>
					${
            userInfo.userName &&
            userInfo.linkedInUsername &&
            userInfo.userImageUrl
              ? `
						<div class="user-info">
							<img src="${userInfo.userImageUrl}" alt="${userInfo.userName}" class="user-image">
							<div class="user-details">
								<p class="user-name">${userInfo.userName}</p>
								<p class="user-linkedin">@${userInfo.linkedInUsername}</p>
							</div>
						</div>
					`
              : ""
          }
				</div>
			`;
      }
    })
    .join("");

  return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Slides</title>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
				<style>
					@page {
						size: A4;
						margin: 0;
					}
					body {
						margin: 0;
						font-family: 'Roboto', sans-serif;
					}
					.page {
						width: 210mm;
						height: 297mm;
						page-break-after: always;
						background-color: ${currentTheme.background};
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						position: relative;
					}
					.content {
						width: 80%;
						text-align: left;
					}
					.slide-number {
						width: 32px;
						height: 32px;
						border-radius: 50%;
						background-color: ${currentTheme.title};
						color: white;
						display: flex;
						align-items: center;
						justify-content: center;
						font-weight: bold;
						margin-bottom: 16px;
						font-family: 'Roboto', sans-serif;
					}
					h1 {
						font-family: 'Poppins', sans-serif;
						font-weight: bold;
						color: ${currentTheme.title};
						margin-bottom: 16px;
						font-size: 3rem;
						line-height: 1.2;
					}
					p {
						font-family: 'Roboto', sans-serif;
						color: ${currentTheme.subtitle};
						font-size: 1.25rem;
					}
					.user-info {
						position: absolute;
						bottom: 16px;
						left: 16px;
						display: flex;
						align-items: center;
					}
					.user-image {
						width: 48px;
						height: 48px;
						border-radius: 50%;
						margin-right: 8px;
					}
					.user-details {
						display: flex;
						flex-direction: column;
					}
					.user-name {
						font-family: 'Poppins', sans-serif;
						font-weight: bold;
						color: ${currentTheme.title};
						font-size: 0.9rem;
						margin: 0;
					}
					.user-linkedin {
						font-family: 'Roboto', sans-serif;
						color: ${currentTheme.subtitle};
						font-size: 0.8rem;
						margin: 0;
					}
				</style>
			</head>
			<body>
				${slidesHtml}
			</body>
		</html>
	`;
}

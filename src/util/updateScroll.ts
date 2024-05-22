/**
 * 移动纵向滚动条，将指定的元素显示在可视区域
 * @param element 待移动的元素
 * @param scrollContainer 包含滚动条的容器
 */
export function updateScrollTop(
    element: HTMLElement,
    scrollContainer: HTMLElement,
) {
    const scrollBottom =
        scrollContainer.clientHeight + scrollContainer.scrollTop;
    const elementBottom = element.offsetTop + element.offsetHeight;
    if (elementBottom > scrollBottom) {
        scrollContainer.scrollTop =
            elementBottom - scrollContainer.clientHeight;
    } else if (element.offsetTop < scrollContainer.scrollTop) {
        scrollContainer.scrollTop = element.offsetTop;
    }
    element.scrollIntoView({ block: "nearest", inline: "nearest" });
}
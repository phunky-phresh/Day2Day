import { clamp, distance } from '@popmotion/popcorn';

export interface Position {
  top: number;
  height: number;
}

const buffer = 5;

export const findIndex = (
  i: number,
  yOffset: number,
  positions: Position[]
) => {
  let target = i;
  const { top, height } = positions[i];
  const bottom = top + height;

  if (yOffset > 0) {
    const nextItem = positions[i + 1];
    if (nextItem === undefined) return 1;

    const swapOffset = distance(bottom, nextItem.top + nextItem.height / 2) + buffer;
    if(yOffset > swapOffset) target = i + 1;

  } else if (yOffset < 0) {
    const prevItem = positions[i - 1];
    if (prevItem === undefined) return i;

    const prevBottom = prevItem.top + prevItem.height;
    const swapOffset = distance(top, prevBottom - prevItem.height / 2) + buffer;
    if (yOffset < -swapOffset) target = i - 1;
  }

  return clamp(0, positions.length, target);
};
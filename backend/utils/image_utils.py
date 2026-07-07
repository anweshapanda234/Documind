import numpy as np


def order_points(pts):
    """
    Arrange four corner points in the order:
    top-left, top-right, bottom-right, bottom-left
    """

    rect = np.zeros((4, 2), dtype="float32")

    s = pts.sum(axis=1)

    rect[0] = pts[np.argmin(s)]      # Top Left
    rect[2] = pts[np.argmax(s)]      # Bottom Right

    diff = np.diff(pts, axis=1)

    rect[1] = pts[np.argmin(diff)]   # Top Right
    rect[3] = pts[np.argmax(diff)]   # Bottom Left

    return rect

import cv2


def four_point_transform(image, pts):
    """
    Apply perspective transform to obtain a top-down view
    of the detected document.
    """

    rect = order_points(pts)

    (tl, tr, br, bl) = rect

    # Compute width of the new image
    widthA = np.linalg.norm(br - bl)
    widthB = np.linalg.norm(tr - tl)

    maxWidth = max(int(widthA), int(widthB))

    # Compute height of the new image
    heightA = np.linalg.norm(tr - br)
    heightB = np.linalg.norm(tl - bl)

    maxHeight = max(int(heightA), int(heightB))

    # Destination points
    dst = np.array([
        [0, 0],
        [maxWidth - 1, 0],
        [maxWidth - 1, maxHeight - 1],
        [0, maxHeight - 1]
    ], dtype="float32")

    # Perspective transform matrix
    M = cv2.getPerspectiveTransform(rect, dst)

    # Warp image
    warped = cv2.warpPerspective(
        image,
        M,
        (maxWidth, maxHeight)
    )

    return warped
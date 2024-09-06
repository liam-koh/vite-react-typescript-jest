import React from 'react'

/**
 * skeleton ui
 * 이미지를 사용하는것이 성능에 유리할수 있음
 * @returns 
 */
export default function SkeletonUI() {
  return <div className="flex w-[100px] h-[100px] p-[1px] skeleton-square"></div>;
}

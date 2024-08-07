import React from 'react'
import './style.css';

export default function AIComponent() {
  return (
    <div className="discount-summary">
      <h3 className="title">할인 상품 VAT 포함</h3>
      <div className="discount-item">
        <span className="label">결합할인</span>
        <span className="amount">0 원</span>
      </div>
      <div className="discount-item">
        <span className="label">정구 할인카드</span>
        <span className="amount">0 원</span>
      </div>
    </div>
  );
}

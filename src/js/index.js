/* eslint-env browser */
// import _ from 'lodash';
import './../sass/styles.scss';

(function () {
  const addBtn = document.querySelector('.add-btn');
  // ADD NEW ROW
  addBtn.addEventListener('click', function () {
    // Create row element
    const div = document.createElement('div');
    div.classList.add('container-data-input');
    div.innerHTML = `<div class="item-data data-date">01-01-2017</div> 
    <div class="item-data data-inc">0 <span class="icon-comment">&#x25b3;</span></div>
    <div class="item-data data-exp input-exp1">0 <span class="icon-comment">&#x25b3;</span></div>
    <div class="item-data data-exp input-exp2">0 <span class="icon-comment">&#x25b3;</span></div>
    <div class="item-data data-exp input-exp3">0 <span class="icon-comment">&#x25b3;</span></div>
    <div class="item-data data-exp input-exp4">0 <span class="icon-comment">&#x25b3;</span></div>
    <div class="item-data data-exp input-exp5">0 <span class="icon-comment">&#x25b3;</span></div>
    <div class="item-data data-exp input-exp6">0 <span class="icon-comment">&#x25b3;</span></div>
    <div class="item-data data-del">
      <button class="delete-btn">&#x2716;</button>
    </div>`;

    document.body.insertBefore(div, this.parentNode);

    const deleteBtnArr = document.querySelectorAll('.delete-btn');

    // Delete Button
    function delBtn() {
      for (let i = 0; i < deleteBtnArr.length; i += 1) {
        deleteBtnArr[i].addEventListener('click', function () {
          // e.target.closest('.container-data-input').style.display = 'none';
          this.closest('.container-data-input').remove();
        });
      }
    }

    delBtn();
  });
}());

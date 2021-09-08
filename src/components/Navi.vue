<template>
  <!-- navi -->
  <div id="hpb-nav">
    <h3 class="hpb-c-index">ナビゲーション</h3>
    <ul>
      <li id="nav-toppage">
        <router-link to="/">
          <span class="ja">トップページ</span>
          <span class="en">TOP&nbsp;PAGE</span>
        </router-link>
      </li>
      <li id="nav-company">
        <router-link to="/company">
          <span class="ja">会社概要</span>
          <span class="en">COMPANY</span>
        </router-link>
      </li>
      <li id="nav-concept">
        <router-link to="/concept">
          <span class="ja">経営理念</span>
          <span class="en">CONCEPT</span>
        </router-link>
      </li>
      <li id="nav-service">
        <router-link to="/business">
          <span class="ja">業務内容</span>
          <span class="en">BUSINESS</span>
        </router-link>
      </li>
      <li id="nav-news">
        <router-link to="/product">
          <span class="ja">製品情報</span>
          <span class="en">PRODUCT</span>
        </router-link>
      </li>
      <li id="nav-recruit">
        <router-link to="/recruit">
          <span class="ja">採用情報</span>
          <span class="en">RECRUIT</span>
        </router-link>
      </li>
      <li id="nav-contact">
         <router-link to="/contact">
          <span class="ja">お問い合わせ</span>
          <span class="en">CONTACT&nbsp;US</span>
        </router-link>
      </li>
    </ul>
  </div>
  <!-- navi end -->
</template>

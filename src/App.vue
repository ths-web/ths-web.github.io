<template>
  <!-- container -->
  <div id="hpb-container">
    <!-- header -->
    <div id="hpb-header">
      <div id="hpb-headerMain">
        <h1>株式会社同花順</h1>
      </div>
      <div id="hpb-headerLogo">
        <a href="https://ths-web.co.jp/index.html">株式会社同花順</a>
      </div>
      <div id="hpb-headerExtra1">
        <p class="tel"><span>TEL. </span>03-6479-3143</p>
        <p class="address">〒110-0015　東京都江東区北砂１－３－４９－４０４</p>
      </div>
    </div>
    <!-- header end -->
    <!-- inner -->
    <div id="hpb-inner">
      <!-- wrapper -->
      <div id="hpb-wrapper">
        <!-- page title -->
        <div id="hpb-title" class="hpb-top-image">
          <h2>確かな技術と自由な発想　新しいライフスタイルをご提案します</h2>
        </div>
        <!-- page title end -->
        <!-- main -->
        <div id="hpb-main">
          <!-- toppage -->
          <div id="toppage">
            <div id="toppage-topics">
              <h3>TOPICS</h3>
              <ul>
                <li>
                  すべてのお客様から信頼される真のパートナーシップカンパニーを目指します。
                </li>
                <li>
                  お客様のニーズに対応した最適な「人と技術と品質」のサービスを提供致します。
                </li>
                <li>
                  関係法令を遵守し、社員に対する安全及び情報保護教育を徹底します。
                </li>
              </ul>
              <hr />
            </div>
            <div id="toppage-news">
              <h3>
                <span class="en">NEWS</span><span class="ja">新着情報</span>
              </h3>
              <dl>
                <!-- <dt>2014年06月15日</dt>
                                <dd>サイトを更新しました。</dd>
                                <dt>2014年05月26日 </dt>
                                <dd>会社を設立しました。</dd> -->
              </dl>
            </div>
            <div id="pagetop">
              <a href="https://ths-web.co.jp/index.html#hpb-container"
                >このページの先頭へ</a
              >
            </div>
          </div>
          <!-- toppage end -->
        </div>
        <!-- main end -->
      </div>
      <!-- wrapper end -->
      <!-- navi -->
      <div id="hpb-nav">
        <h3 class="hpb-c-index">ナビゲーション</h3>
        <ul>
          <li id="nav-toppage">
            <a href="https://ths-web.co.jp/index.html"
              ><span class="ja">トップページ</span
              ><span class="en">TOP&nbsp;PAGE</span></a
            >
          </li>
          <li id="nav-company">
            <a href="https://ths-web.co.jp/company.html"
              ><span class="ja">会社概要</span
              ><span class="en">COMPANY</span></a
            >
          </li>
          <li id="nav-concept">
            <a href="https://ths-web.co.jp/concept.html"
              ><span class="ja">経営理念</span
              ><span class="en">CONCEPT</span></a
            >
          </li>
          <li id="nav-service">
            <a href="https://ths-web.co.jp/business.html"
              ><span class="ja">業務内容</span
              ><span class="en">BUSINESS</span></a
            >
          </li>
          <li id="nav-news">
            <a href="https://ths-web.co.jp/product.html"
              ><span class="ja">製品情報</span
              ><span class="en">PRODUCT</span></a
            >
          </li>
          <li id="nav-recruit">
            <a href="https://ths-web.co.jp/recruit.html"
              ><span class="ja">採用情報</span
              ><span class="en">RECRUIT</span></a
            >
          </li>
          <li id="nav-contact">
            <a href="https://ths-web.co.jp/contact.html"
              ><span class="ja">お問い合わせ</span
              ><span class="en">CONTACT&nbsp;US</span></a
            >
          </li>
        </ul>
      </div>
      <!-- navi end -->
      <!-- aside -->
      <div id="hpb-aside">
        <h3 class="hpb-c-index">バナースペース</h3>
        <div id="banner">
          <ul>
            <li>
              <a
                href="https://ths-web.co.jp/service.html"
                id="banner-service"
                >サービス／製品一覧</a
              >
            </li>
            <li>
              <a
                href="https://ths-web.co.jp/recruit.html"
                id="banner-recruit"
                >採用情報</a
              >
            </li>
            <li>
              <a
                href="https://ths-web.co.jp/access.html"
                id="banner-access"
                >アクセス</a
              >
            </li>
          </ul>
        </div>
        <div id="companyinfo">
          <h3>株式会社同花順</h3>
          <p>
            〒 136-0073<br />
            東京都江東区北砂１－３－４９－４０４<br />
          </p>
          <p>TEL 03-6479-3143<br /></p>
        </div>
      </div>
      <!-- aside end -->
    </div>
    <!-- inner end -->
    <!-- footer -->
    <div id="hpb-footer">
      <div id="hpb-footerMain">
        <p>
          copyright&#169;2014&nbsp;株式会社同花順&nbsp;Co., Ltd.
          all&nbsp;rights&nbsp;reserved.
        </p>
      </div>
      <div id="hpb-footerExtra1">
        <h3 class="hpb-c-index">サブナビゲーション</h3>
        <ul>
          <!-- <li><a href="privacy.html">プライバシーポリシー</a></li> -->
          <li>
            <a href="https://ths-web.co.jp/pm.html">個人情報保護方針</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- footer end -->
  </div>
  <!-- container end -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

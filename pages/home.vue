<template>
<header class="flex flex-col w-full h-[60px] z-[1100] box-border shrink-0 static text-white bg-[#191f29] shadow-none" style="transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;">
    <div class="flex flex-wrap relative box-border items-center min-h-[64px] px-[24px] box-in">
        <div class="MuiGrid-root flex flex-wrap w-full box-border items-end justify-between" style="min-height: 64px;">
        <div class="MuiGrid-root m-0 box-border" style="padding-left: 1px;">
        <div class="MuiGrid-root flex flex-wrap w-full box-border items-end justify-between">
            <div class="MuiGrid-root m-0 box-border">
                <a href="/">
                <img class="inline-block w-4 h-4 pb-1 pr-2 text-[1.5rem] fill-current shrink-0 select-none font-normal leading-normal" src="~/assets/images/livenote.svg" focusable="false" viewBox="0 0 200 84" aria-hidden="true" style="width: 104px; height: 52px; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;">
                </a>
            </div>
                <div class="MuiGrid-root m-0 box-border">
                    <div class="flex flex-1 overflow-hidden min-h-[48px] box-border pl-[10px] mb-[4px]">
                        <div class="overflow-x-hidden" style="width: 99px; height: 99px; position: absolute; top: -9999px; overflow: scroll;"></div>
                        <div class="flex-auto inline-block relative whitespace-nowrap overflow-x-hidden" style="margin-bottom: 0px;">
                            <div aria-label="simple tabs example" class="flex" role="tablist">
                                <button class="border-0 corsor-pointer m-0 p-0 inline-flex outline-0 items-center select-none rounded-none align-middle justify-center no-underline px-[12px] py-[6px] overflow-x-hidden relative w-96px min-w-[106px] max-w-[264px] box-border min-h-[48px] text-center shrink-0 whitespace-normal opacity-70" tabindex="0" type="button" role="tab" aria-selected="true">
                                    <span class="w-full inline-flex items-center flex-col justify-center text-[14px] font-[700] leading-[20px] ">LiveNoteとは</span>
                                    <span class="inset-0 z-0 overflow-hidden absolute rouded pointer-events-none"></span>
                                </button>
                                <button class="border-0 corsor-pointer m-0 p-0 inline-flex outline-0 items-center select-none rounded-none align-middle justify-center no-underline px-[12px] py-[6px] overflow-x-hidden relative w-[82px] min-w-[82px] max-w-[264px] box-border min-h-[48px] text-center shrink-0 whitespace-normal uppercase opacity-70" tabindex="-1" type="button" role="tab" aria-selected="false">
                                    <span class="w-full inline-flex items-center flex-col justify-center text-[14px] font-[700] leading-[20px] ">ホーム</span>
                                    <span class="inset-0 z-0 overflow-hidden absolute rouded pointer-events-none"></span>
                                </button>
                                <button class="border-0 corsor-pointer m-0 p-0 inline-flex outline-0 items-center select-none rounded-none align-middle justify-center no-underline px-[12px] py-[6px] overflow-x-hidden relative w-[82px] min-w-[82px] max-w-[264px] box-border min-h-[48px] text-center shrink-0 whitespace-normal uppercase opacity-70" tabindex="-1" type="button" role="tab" aria-selected="false">
                                    <span class="w-full inline-flex items-center flex-col justify-center text-[14px] font-[700] leading-[20px] ">よくある<br>ご質問</span>
                                    <span class="inset-0 z-0 overflow-hidden absolute rouded pointer-events-none"></span>
                                </button>
                            </div>
                            <span class="MuiTabs-indicator h-[4px] bg-white w-full bottom-0 absolute" style="left: 0px; width: 106px; transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"></span>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        <div class="MuiGrid-root m-0 box-border" style="margin-bottom: 7px;">
            <button class="rounded-full border-0 corsor-pointer m-0 inline-flex outline-0 items-center select-none align-middle justify-center no-underline min-w-[64px] box-border font-[700] leading-[20px] uppercase jss520 px-[8px] py-[6px]" tabindex="0" type="button" style="font-size: 14px; background-color: rgb(8, 174, 244); width: 78px; height: 32px; margin-bottom: 6px;">
                <span class="items-center justify-center not-italic w-full">ログイン</span>
                <span class="inset-0 z-0 overflow-hidden absolute rouded pointer-events-none"></span>
            </button>
            <button class="rounded-full border-0 corsor-pointer m-0 inline-flex outline-0 items-center select-none align-middle justify-center no-underline min-w-[64px] box-border font-[700] leading-[20px] uppercase jss522 px-[8px] py-[6px]" tabindex="0" type="button" style="font-size: 14px; background-color: rgb(79, 83, 92); width: 72px; height: 32px; margin-left: 7px; margin-bottom: 6px;">
                <span class="items-center justify-center not-italic w-full">新規登録</span>
                <span class="inset-0 z-0 overflow-hidden absolute rouded pointer-events-none"></span>
            </button>
        </div>
        </div>
    </div>
    <div class="absolute"></div>
</header>





<div id="main" style="height: calc(100vh - 60px); width: 100%; overflow: auto; background: linear-gradient(155deg, rgb(249, 250, 252) 0%, rgb(249, 250, 252) 35%, rgb(229, 229, 229) 35%, rgb(229, 229, 229) 100%);">
    <main class="MuiContainer-root jss309 MuiContainer-maxWidthLg">
        <div class="jss310">
            <div style="position: absolute; z-index: 1;">
                    <img class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" src="" alt="TOP画像" title="" style="max-width: 960px;">
            </div>
            <div style="width: 100%; z-index: 3; height: 370px; background-color: transparent;"></div>
            <div style="z-index: 3;">
                <div class="jss313"></div>
                <div style="background-color: rgb(249, 250, 252); width: 100%; height: 8px;"></div>
                <div style="padding: 35px 16px; background-color: rgb(249, 250, 252);">
                    <div style="margin: auto; max-width: 620px;">
                        <button class="MuiButtonBase-root MuiButton-root jss344 jss345 MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth" tabindex="0" type="button" style="font-size: 18px; line-height: 20px; padding: 20px 0px;">
                            <span class="MuiButton-label">入会手続きはこちら！</span>
                            <span class="MuiTouchRipple-root"></span>
                        </button>
                    </div>
                </div>
                <div style="width: 99vw; background-color: rgb(249, 250, 252);">
                    <div class=" marquee-container" style="--pause-on-hover:running; --pause-on-click:running;">
                        <div class="marquee" style="--play:running; --direction:normal; --duration:95.55s; --delay:0s; --margin-right:0px;">
                            <img class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" src="" alt="" title="" height="190" style="height: 190px; width: 1911px;">
                        </div>
                       <div class="marquee" style="--play:running; --direction:normal; --duration:95.55s; --delay:0s; --margin-right:0px;">
                            <img class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" src="" alt="" title="" height="190" style="height: 190px; width: 1911px;">
                        </div>
                    </div>
                </div>
                <div style="width: 100%; background-color: rgb(216, 242, 255); min-height: 300px;">
                    <div class="jss312">
                        <img class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" src="" alt="例えばこんなにお得" title="" style="width: 368px; margin: auto; padding-top: 50px; padding-bottom: 20px;">
                        <img class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" src="" alt="Livenoteなら！" title="" style="max-width: 1020px; margin: auto;">
                    </div>
                </div>
                <div style="background-color: rgb(238, 240, 242); padding-bottom: 36px;">
                    <img class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" src="" alt="5つのポイントサブタイトル" title="">
                    <div style="display: flex; width: 800px; flex-wrap: wrap; justify-content: space-between; margin: auto; padding-bottom: 20px;">
                        <img class="MuiCardMedia-root jss316 MuiCardMedia-media MuiCardMedia-img" src="" alt="広告なしでテクニックが使いたい放題　会員限定テクニックもあり！" title="">
                        <img class="MuiCardMedia-root jss316 MuiCardMedia-media MuiCardMedia-img" src="" alt="可能！" title="">
                        <img class="MuiCardMedia-root jss316 MuiCardMedia-media MuiCardMedia-img" src="" alt="内容が3行でわかる！" title="">
                    </div>
                   <div style="display: flex; width: 536px; flex-wrap: wrap; justify-content: space-between; margin: auto; padding-top: 20px;">
                        <img class="MuiCardMedia-root jss316 MuiCardMedia-media MuiCardMedia-img" src="" alt="隙間時間で超活用！" title="">
                        <img class="MuiCardMedia-root jss316 MuiCardMedia-media MuiCardMedia-img" src="" alt="プレミアムプランならでさらにできる！" title="">
                    </div>
                </div>
                <div style="background-color: rgb(216, 242, 255); padding-bottom: 48px;">
                    <img class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" src="" alt="ご利用までのかんたん3ステップ" title="">
                    <img class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" src="" alt="メルアド登録→プラン選択→ご利用開始！" title="" style="margin: auto; max-width: 800px;">
                </div>
                <div style="background-color: white;">
                    <div style="padding-top: 62px; padding-bottom: 60px;">
                        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter" style="font-size: 14px; line-height: 14px; color: rgb(79, 83, 92); font-weight: 700;">COMPARE</p>
                        <hr style="height: 3px; border: none; background: linear-gradient(90deg, rgb(114, 153, 254) 0%, rgb(63, 198, 255) 100%); width: 102px; margin: 7px auto 5px;">
                        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter" style="font-size: 24px; line-height: 30px; color: rgb(79, 83, 92); font-weight: 700;">プラン比較</p>
                    </div>
                    <div style="max-width: 800px; padding: 0px 16px; margin: auto;">
                        <div class="jss317">
                            <div class="jss318">
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">プラン名</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">価格</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">広告無し</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">テクニック使用<br>件数</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">プレミアム<br>テクニック使用権</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1"><br></p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">過去のテクニック<br>保存件数</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">バック<br>グラウンド<br>再生<p class="MuiTypography-root jss325 MuiTypography-body1">※4</p></p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">image<br>ダウンロード<br>機能<p class="MuiTypography-root jss325 MuiTypography-body1">※4</p></p></div>
                            </div>
                            <div class="jss318">
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">プレミアム<br>プラン</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss324 MuiTypography-body1">￥824/月<p class="MuiTypography-root jss325 MuiTypography-body1">※2</p></p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">◎</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss323 MuiTypography-body1">無制限</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">◎</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">◎</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss323 MuiTypography-body1">無制限</p></div>
                               <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">◎</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">◎</p></div>
                            </div>
                            <div class="jss318">
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">ライト<br>プラン</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">￥599/月<p class="MuiTypography-root jss325 MuiTypography-body1">※2</p></p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">◎</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss323 MuiTypography-body1">無制限</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">×</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">×</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss323 MuiTypography-body1">30件まで</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">×</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">×</p></div>
                            </div>
                            <div class="jss318">
                                <div class="jss319 jss320"><p class="MuiTypography-root jss322 MuiTypography-body1">ミニマム<br>プラン</p><p class="MuiTypography-root jss325 jss326 MuiTypography-body1">※1</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss323 MuiTypography-body1">￥299/月</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">◎</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss323 MuiTypography-body1">月3個<p class="MuiTypography-root jss325 MuiTypography-body1">※3</p></p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">×</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">×</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root jss323 MuiTypography-body1">0件</p></div>
                                <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">×</p></div>
                               <div class="jss319 jss320"><p class="MuiTypography-root MuiTypography-body1">×</p></div>
                            </div>
                        </div>
                        <div class="jss328">
                           <div class="jss329">※1 初回時のみ加入可能</div>
                            <div class="jss329">※2 年支払いした場合の月換算</div>
                            <div class="jss329">※3 プラン更新日にリセット</div>
                            <div class="jss329">※4 アプリのみ</div>
                        </div>
                        <div style="padding: 40px 0px;">
                            <button class="MuiButtonBase-root MuiButton-root jss344 jss346 MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth" tabindex="0" type="button" style="font-size: 18px; line-height: 20px; height: 48px;">
                                <span class="MuiButton-label">入会手続きはこちら！</span>
                                <span class="MuiTouchRipple-root"></span>
                            </button>
                        </div>
                    </div>
                    <div style="background-color: rgb(249, 250, 252);">
                        <img class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" src="" alt="テクニック一覧" title="">
                        <div style="margin: auto; display: flex; flex-flow: row wrap; width: 1020px;">
                            <div style="max-width: 333px; margin: 0px auto;">
                                <div style="background-color: rgb(223, 245, 255); border-radius: 17px; position: relative;">
                                    <div style="width: 303px; margin: auto;">
                                        <p class="MuiTypography-root jss363 jss364 MuiTypography-body1" style="color: rgb(120, 124, 132); font-size: 20px; line-height: 30px; padding: 20px 0px 8px;">HSPの活かし方や具体的対処法、メリットなどHSPの捉え方</p>
                                    </div>
                                    <img src="" alt="人" width="60" height="60" style="margin-left: 20px; margin-bottom: 12px;">
                                    <div style="position: absolute; left: 90px; bottom: 26px;">
                                        <p class="MuiTypography-root jss363 jss365 MuiTypography-body1" style="color: rgb(120, 124, 132); font-size: 11px; line-height: 14px; padding: 0px 0px 5px;">人</p>
                                        <p class="MuiTypography-root jss363 jss366 MuiTypography-body1" style="color: rgb(120, 124, 132); font-size: 11px; line-height: 14px; padding: 0px;">おすすめ</p>
                                    </div>
                                </div>
                                <div style="display: flex; justify-content: center; align-items: center;">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABQCAYAAAD1NTBhAAAACXBIWXMAAFiVAABYlQHZbTfTAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTE5VDE5OjUwOjQ0KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0xOVQxOTo1Njo1NiswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0xOVQxOTo1Njo1NiswOTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjZjc0YTlmNC0zYWRjLTdlNGQtOTk3Ni1iNGJmMWI5OTM2MDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Y2Y3NGE5ZjQtM2FkYy03ZTRkLTk5NzYtYjRiZjFiOTkzNjA5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2Y3NGE5ZjQtM2FkYy03ZTRkLTk5NzYtYjRiZjFiOTkzNjA5Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZjc0YTlmNC0zYWRjLTdlNGQtOTk3Ni1iNGJmMWI5OTM2MDkiIHN0RXZ0OndoZW49IjIwMjEtMDQtMTlUMTk6NTA6NDQrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7gSrvZAAACcklEQVR42u2d4U3DQAyFPUJHYAQ2gA1gA9gANsgIjFA2YARG6Aa4hQFOKknz0/wAIYTSNm2Tq8/5nvQW8JPtZ/uaim7sSRszmJ2qyS6kD95qeyZgGVlb6i2OiIgmm2ljieBl4tpu5VBoY3OCl4WVHANNdkHwRueLnAKyaGQe0nfIouycyxAgi8bhR2tXwwhEFo1CGRIMr4PPPYthBWIu8uXeurBqrSKww3B17OzTI4uUAA8g0MYeZAzop10T4NP53tiNjIXlxl4JshOLvcN2Yxi8CiQiorU9EmjHAlHqChCIUudcIEpdAQJR6goQiFJ3xKBa253khNZ2T+AdC8TG28EurueuboEA+7kc6ppKPyro3NBbpLXdIsD+V6RyTnA76vWiZ3ZWkXg+vPfsfXlWgTANDq32FtPAFbaLG3sSD9DaLnF2nSXuVbyAU3knk3gC6yCHRgH7fabXPYgUYKOASAX2IUTq4KddI1LEn0Ai0gTnIURyujhFpALtNiIVVuYm/9auhDL37yqbcHOeRZreqWIhpWFyInkeWnddZifzvNjLEQ+Ht303V5RZmKjDq6Rk/JzQlQ23f/MQ9sXQqnXw4oe+tNMsqESBru0+4lAbJovCzkuRsuhXqGC/UQqVRf9KnjIXOS95gbYPlURFkME2aXvix2cxEBz0mJlqewwvUuHZFNMw7MimhGHwn01zehFzk9/vbZNNCDQ5EyHAd9lDnb/Z5HD5ijK++1NCkS34aO3KQdmbo4Tj/pT1U5oIxZCapT/9rI10ZHHSyf93h5EYz0iEPH1HEQpx/AqlmIIcQn2bicVB/aaxauvtx8ygYxIE5/wC+6zjaDVgPFQAAAAASUVORK5CYII=" alt="" width="13" height="10">
                                </div>
                                <div style="padding: 16px 20px 20px 17px;">
                                    <p class="MuiTypography-root jss363 jss367 MuiTypography-body1" style="font-weight: 500; font-size: 14px; line-height: 22px; color: rgb(120, 124, 132); padding: 0px;">
                                    メリット
                                    <span class="jss315">月500円台でどんな悩みでも答えが見つかる.</span>
                                    </p>
                                </div>
                                <div style="border-width: 0px 1px 1px; border-style: dashed; border-color: rgb(187, 187, 187); border-image: initial; width: 302px; margin: auto;"></div>
                                <div style="padding-top: 20px; padding-left: 20px; padding-bottom: 80px;">
                                    <p class="MuiTypography-root jss363 jss368 MuiTypography-body1" style="color: rgb(120, 124, 132); font-size: 14px; line-height: 18px; padding: 0px 0px 10px;">HSPのおすすめテクニック</p>
                                   <div style="display: flex; justify-content: space-between; width: 304px; padding-top: 8px;">
                                        <img src="" alt="HSPの動画" height="81" width="144" style="border-radius: 4px;">
                                        <img src="" alt="アサーショントレーニング" height="81" width="144" style="border-radius: 4px;">
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgb(252, 245, 220);">
                        <p class="MuiTypography-root jss343 MuiTypography-body1" style="color: rgb(253, 124, 83);">その他オプションプランも今後追加予定！<br>あなたに合わせた 生活のスタイルを作ろう！</p>
                    </div>
                    <div class="absolute bottom-[30px] right-[50px]">
                        <div animatein="fadeInRight" scrollableparentselector="#main">
                            <img class="block w-[200px] bg-cover bg-no-repeat bg-center object-cover" src="~/assets/images/join.png" alt="入会手続き" title="" style="width: 200px;">
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </main>
</div>
                    






<footer class="w-full block box-border mx-auto px-0 bg-[#35383F] MuiContainer-maxWidthXl">
    <hr class="border-none m-0 shrink-0 bg-white/[.12] h-[1px]">
    <div class="MuiGrid-root h-[50px] items-center px-[10px] content-center justify-center w-full flex flex-wrap box-border">
        <div class="MuiGrid-root h-full flex items-center content-center justify-center m-0 box-border max-w-1/12 flex-grow-0 basis-1/12">
            <a class="m-0 MuiLink-root no-underline text-[#F9FAFC]" to="/">
                <img class="inline-block w-4 h-4 pb-1 pr-2 text-[1.5rem] fill-current shrink-0 select-none font-normal leading-normal" src="~/assets/images/livenote.svg" focusable="false" viewBox="0 0 200 84" aria-hidden="true" style="width: 104px; height: 52px; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;">
            </a>
        </div>
        <div class="MuiGrid-root h-full flex content-end flex-row justify-end m-0 box-border flex-grow-0 max-w-11/12 basis-11/12 items-end">
            <div class="flex items-center flex-row pl-[8px] w-full justify-between box-border">
                <div class="flex items-center flex-row box-border font-normal leading-[1.43]">
                    <a class="m-0 MuiLink-root no-underline text-[#F9FAFC]" href="" target="_blank">
                        <p class="block m-[8px] text-[10px] font-normal leading-normal">利用規約</p>
                    </a>
                    <a class="m-0 MuiLink-root no-underline text-[#F9FAFC]" href="" target="_blank">
                        <p class="block m-[8px] text-[10px] font-normal leading-normal">プライバシーポリシー</p>
                    </a>
                    <a class="m-0 MuiLink-root no-underline text-[#F9FAFC]" href="" target="_blank">
                        <p class="block m-[8px] text-[10px] font-normal leading-normal">よくあるご質問</p>
                    </a>
                    <a class="m-0 MuiLink-root no-underline text-[#F9FAFC]" href="" target="_blank">
                        <p class="block m-[8px] text-[10px] font-normal leading-normal">お問い合わせ</p>
                    </a>
                </div>
                <div class="h-[50px] flex flex-col justify-center">
                    <p class="block mx-4 m-0 text-[8px] font-normal leading-normal text-white">iOS端末もしくはAndroid端末をご利用の方は、</p>
                    <p class="block mx-4 m-0 text-[8px] font-normal leading-normal text-white">各ストアに専用アプリがあります。</p>
                    <p class="block mx-4 m-0 text-[8px] font-normal leading-normal text-white">ダウンロードしてサービスをご利用ください。</p>
                </div>
            </div>
            <div class="h-full flex items-center content-center justify-center">
                <a class="m-0 MuiLink-root no-underline text-[#F9FAFC]" href="" target="_blank">
                    <img src="~/assets/images/appstore.png" alt="iOS" class="w-[95px] h-[32px] m-[5px]">
                </a>
                <a class="m-0 MuiLink-root no-underline text-[#F9FAFC]" href="" target="_blank">
                    <img src="~/assets/images/googleplay.png" alt="Android" class="w-[95px] h-[32px] m-[5px]">
                </a>
            </div>
        </div>
    </div>
    <hr class="border-none m-0 shrink-0 bg-white/[.12] h-[1px]">
        <div class="MuiGrid-root flex-1 h-[30px] items-center content-center justify-center w-full flex flex-wrap box-border">
            <a class="flex-grow-0 shrink-0 basis-auto text-white p-[12px] overflow-visible text-[1.5rem] text-center rounded-[50%] border-0 cursor-pointer m-0 inline-flex outline-0 relative items-center select-none align-middle justify-center no-underline bg-transparent" tabindex="0" aria-disabled="false" href="" target="_blank" style="transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;">
                <span class="w-full flex items-center justify-center text-white text-[1.5rem] text-center cursor-pointer select-none">
                    <svg class="fill-current w-4 h-4 inline-block text-[1.5rem] shrink-0 select-none overflow-hidden text-center cursor-pointer" focusable="false" viewBox="0 0 21 20" aria-hidden="true" style="transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5002 1.19995C5.64003 1.19995 1.7002 5.13978 1.7002 9.99995C1.7002 14.8601 5.64003 18.7999 10.5002 18.7999C15.3604 18.7999 19.3002 14.8601 19.3002 9.99995C19.3002 5.13978 15.3604 1.19995 10.5002 1.19995ZM14.0798 8.40862C14.0834 8.48378 14.0844 8.55895 14.0844 8.63228C14.0844 10.924 12.3418 13.5649 9.15361 13.5649C8.21155 13.5664 7.28908 13.2959 6.49711 12.7857C6.63186 12.8022 6.77028 12.8086 6.91053 12.8086C7.72269 12.8086 8.46978 12.5327 9.06286 12.067C8.70144 12.0599 8.35123 11.9403 8.06105 11.7247C7.77087 11.5091 7.55517 11.2084 7.44403 10.8644C7.70359 10.9137 7.97097 10.9034 8.22594 10.8341C7.83366 10.7548 7.48088 10.5422 7.22743 10.2325C6.97398 9.92272 6.83546 9.53485 6.83536 9.13462V9.11353C7.06911 9.24278 7.33678 9.32162 7.62094 9.33078C7.25318 9.08597 6.99283 8.7099 6.89315 8.27949C6.79347 7.84908 6.86199 7.39685 7.0847 7.01528C7.52007 7.55062 8.06302 7.98855 8.67838 8.30073C9.29375 8.61292 9.96782 8.79239 10.6569 8.82753C10.5693 8.45565 10.607 8.06524 10.7642 7.717C10.9214 7.36875 11.1892 7.08219 11.526 6.90186C11.8628 6.72153 12.2498 6.65753 12.6268 6.71982C13.0037 6.7821 13.3495 6.96718 13.6104 7.24628C13.9984 7.16954 14.3703 7.02725 14.7104 6.82553C14.5812 7.22716 14.3105 7.56819 13.9487 7.78528C14.2923 7.7439 14.6278 7.65152 14.9442 7.5112C14.7118 7.85944 14.4191 8.16335 14.0798 8.40862Z" fill="white"></path>
                        </svg>
                    </svg>
                </span>
                <span class="inset-0 z-0 overflow-hidden absolute pointer-events-none hidden"></span>
            </a>
            <a class="flex-grow-0 shrink-0 basis-auto text-white p-[12px] overflow-visible text-[1.5rem] text-center rounded-[50%] border-0 cursor-pointer m-0 inline-flex outline-0 relative items-center select-none align-middle justify-center no-underline bg-transparent" tabindex="0" aria-disabled="false" href="" target="_blank" style="transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;">
                <span class="w-full flex items-center justify-center text-white text-[1.5rem] text-center cursor-pointer select-none">
                    <svg class="fill-current w-4 h-4 inline-block text-[1.5rem] shrink-0 select-none overflow-hidden text-center cursor-pointer" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;">
                        <svg width="24" height="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="M93.2315 27.9135C92.719 26.0118 91.7173 24.2776 90.3262 22.8833C88.9351 21.489 87.203 20.4834 85.3025 19.9665C78.2555 18.0315 50.063 18 50.063 18C50.063 18 21.875 17.9685 14.8235 19.818C12.9242 20.3587 11.1957 21.3785 9.80405 22.7796C8.4124 24.1807 7.40429 25.9161 6.87651 27.819C5.01801 34.866 5.00001 49.482 5.00001 49.482C5.00001 49.482 4.98201 64.17 6.82701 71.145C7.86201 75.0015 10.8995 78.048 14.7605 79.0875C21.8795 81.0225 49.9955 81.054 49.9955 81.054C49.9955 81.054 78.188 81.0855 85.235 79.2405C87.1362 78.7246 88.8699 77.7213 90.2645 76.3298C91.659 74.9384 92.6662 73.2071 93.1865 71.307C95.0495 64.2645 95.063 49.653 95.063 49.653C95.063 49.653 95.153 34.9605 93.2315 27.9135ZM41.045 63.0225L41.0675 36.0225L64.499 49.545L41.045 63.0225Z"></path>
                        </svg>
                    </svg>
                </span>
                <span class="inset-0 z-0 overflow-hidden absolute pointer-events-none hidden"></span>
            </a>
        </div>
    <hr class="border-none m-0 shrink-0 bg-white/[.12] h-[1px]">
    <p class="block mx-4 m-0 h-[30px] text-[10px] text-white text-center mb-[5px] font-normal leading-normal">Copyright ©LiveNote All Rights Reserved.</p>
</footer>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name:'home',
    components: {
    },
    setup() {
        return {

        }
    }
})
</script>

<style scoped>
*, *::before, *::after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.MuiContainer-root {
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
}
.MuiCardMedia-root {
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.MuiCardMedia-media {
    width: 100%;
}
.MuiCardMedia-img {
    object-fit: cover;
}
.MuiButtonBase-root {
    color: inherit;
    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    padding: 0;
    position: relative;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    -moz-appearance: none;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
}
.MuiButton-root {
    color: #F9FAFC;
    padding: 6px 16px;
    font-size: 14px;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: Noto Sans JP,Helvetica,-apple-system,sans-serif,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-weight: 700;
    line-height: 20px;
    border-radius: 4px;
    text-transform: uppercase;
}
.MuiButton-contained {
    color: rgba(0, 0, 0, 0.87);
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    background-color: #e0e0e0;
}
.MuiButton-containedPrimary {
    color: #fff;
    background-color: #3f51b5;
}
.MuiButton-fullWidth {
    width: 100%;
}
.MuiButton-label {
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
}
.MuiTouchRipple-root {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    z-index: 0;
    overflow: hidden;
    position: absolute;
    border-radius: inherit;
    pointer-events: none;
}
.MuiTypography-root {
    margin: 0;
}
.MuiTypography-body1 {
    font-size: 1rem;
    font-family: Noto Sans JP,Helvetica,-apple-system,sans-serif,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-weight: 400;
    line-height: 1.5;
}
.MuiTypography-alignCenter {
    text-align: center;
}
.marquee {
    display: flex;
    flex-direction: row;
    margin-right: var(--margin-right);
    animation: scroll var(--duration) linear var(--delay) infinite;
    animation-play-state: var(--play);
    animation-delay: var(--delay);
    animation-direction: var(--direction);
}
.marquee-container {
    overflow-x: hidden !important;
    display: flex !important;
    flex-direction: row !important;
    position: relative;
    height: 100%;
    width: 100%;
}
.jss309 {
    padding: 0;
    z-index: 9999;
    max-width: 100%;
    overflow-x: hidden;
}
.jss310 {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
}
.jss312 {
    margin: auto;
    max-width: 1020px;
    padding-bottom: 40px;
}
.jss313 {
    width: 100%;
    height: 20px;
    background: linear-gradient(rgba(255,255,255,0) 0, #F9FAFC 100%);
}
.jss315 {
    background-color: #FFEE94;
}
.jss316 {
    width: 330px;
}
.jss317 {
    gap: 16px;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
}
.jss318 {
    gap: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.jss319 {
    color: #4F535C;
    width: 100%;
    border: 1px solid #BBBBBB;
    height: 64px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.jss320 {
    background: #F5F5F5;
}
.jss322 {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
}
.jss328 {
    display: flex;
    align-items: flex-start;
    padding-top: 4px;
    flex-direction: column;
}
.jss329 {
    color: #BBBBBB;
    font-size: 10px;
    line-height: 16px;
}
.jss330 {
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
}
.jss343 {
    color: #35383F;
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    line-height: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
}
.jss345 {
    color: rgb(249, 250, 252);
    padding: 10px 0px;
    font-size: 14px;
    font-family: "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 700;
    border-radius: 32px;
}
.jss346 {
    color: rgb(249, 250, 252);
    padding: 10px 0px;
    font-size: 14px;
    font-family: "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 700;
    border-radius: 32px;
}
.jss364 {
    color: rgb(249, 250, 252);
    opacity: 1;
    padding: 0px 6px;
    font-size: 18px;
    font-family: "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 700;
}
.jss365 {
    color: rgb(249, 250, 252);
    opacity: 1;
    padding: 0px 6px;
    font-size: 18px;
    font-family: "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 700;
}
.jss366 {
    color: rgb(249, 250, 252);
    opacity: 1;
    padding: 0px 6px;
    font-size: 18px;
    font-family: "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 700;
}
.jss368 {
    color: rgb(249, 250, 252);
    opacity: 1;
    padding: 0px 6px;
    font-size: 18px;
    font-family: "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 700;
}
.jss345.MuiButton-containedPrimary {
    background-color: rgb(8, 174, 244);
}
.jss346.MuiButton-containedPrimary {
    background-color: rgb(8, 174, 244);
}
</style>
# 用Reactnative建立基礎 APP
## 程式架構
主要架構為Header、Menu、FirstPage、SecondPage、Tab，
簡單將Menu與FirstPage、SecondPage另外拆成獨立JS檔以便維護，而Tab則獨立成Component，避免將所有的元件都寫進Render內導致程式凌亂、維護不便
## 各項目進行的時間
### React Native 環境建置與程式研究
此項目花費時間約兩天半，將先前淺學的React.js經過爬文學習吸收內化
### APP 下方 Tab切換頁面
此項目花費時間約一天，由於第一次使用React Native插件與仍不上手的緣故，在排解錯誤上花費較多時間。
一開始是將Tab寫入Render區塊內，後來考量其他功能與顯示的問題便將其額外做成Component
### APP 選單點擊打開、收起
此項目花費時間約一天，建置此區塊時原先想將Tab上切換的FirstPage和SecondPage也放入選單內進行切換，但後來考量到花費時間過長因此先放入網址，之後再嘗試將頁面放入Menu內。
### 串接一組列表資料api
此項目花費時間約半天，這邊將React時所學的API串接拿出來應用，因此花費時間較短。

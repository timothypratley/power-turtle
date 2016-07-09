(ns power-turtle.lang.korean)

(def fns
  '{clojure-turtle.core
    {forward 앞으로
     back 뒤로
     left 왼쪽
     right 권리
     color 색
     home 집
     clean 깨끗한
     penup 펜까지
     pendown 펜다운
     start-fill 채우기시작
     end-fill 최종채우기
     setxy 위치
     setheading 표제
     wait 기다림
     draw-turtle-commands 거북이명령을그릴}
    power-turtle.power
    {html 웹페이지
     add-action 작업을추가
     red 빨간
     green 녹색
     blue 푸른
     osctagon 팔각형
     pattern 무늬}})

(def forms
  '{cljs.core
    {aget 배열을얻을
     and 과
     apply 대다
     aset 세트
     assoc 동무
     assoc-in 에연결
     def 밝히다
     defn 함수를정의
     if 만약
     fn 기능
     repeatedly 자꾸
     let 방해}
    power-turtle.power
    {all 모든}})

(def all
  (merge fns forms))
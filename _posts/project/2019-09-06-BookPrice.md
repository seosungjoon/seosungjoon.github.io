---
layout: post
title: 세종창의학기제 Ⅲ,Ⅳ
date: 2019-09-06 21:10:00 +0900
category: project
period: 2019.03.01~2019.06.07
description: 머신러닝을 통한 중고책 거래가 자동측정 모듈 구축
more_details: ["java", "android", "rbp", "linux", "git", "mysql", "nodejs"]
---

머신러닝을 통한 중고책 거래가 자동측정 모듈 구축

## Member

이름 | 역할
:--: | :--:
서성준 | Android App 개발 & Raspberry 서버 구축
남기범 | Back-end 구축
김신욱 | DB 구축 & Android App 개발
유경수 | Back-end 구축

## Environment

Language | back-end | DB
:---: | :---: | :---:
Java / Swift / Javascript | Raspberry PI 3B / Node.js / Express.js | MySQL

### 개발 개요

## 1.개발 기획

현재 가장 주목을 받고 있는 머신러닝 기술을 어플리케이션에 접목해보고자 중고장터에 머신러닝을 접목시키면 어떨까 생각하여 현재의 모듈을 기획하였다.
<br><br>
우선, 초기 기획안은 다음과 같다<br>
‘머신러닝 기술을 이용하여 사용자가 촬영한 물품을 자동 판별하여 해당 물품의 종류 및 가격을 자동 측정’<br><br>
이후 이 기획안의 실현 가능성에 대하여 지도교수님과 함께 의논해본 결과, 아직 학부생의 실력으로는 많이 부족하다는 결론을 내리게 되었다. 하지만 위 초기 기획안이 최종 목표라면 이 최종 목표에 다가갈 수 있는 밑거름부터 시작하자는 지도교수님의 조언을 통해, 중고물품이라는 범주에서 축소하여 중고 책부터 시작하기로 하였다. 
<br>
따라서 결정된 기획안은<br>
‘머신러닝을 통한 중고 책 거래가 자동측정 모듈 구축’이다.<br>
사용자가 중고 책을 촬영하면, 머신러닝은 해당 물품이 책인지를 판별한 뒤, 책 속 제목을 추출하여 자동으로 판별해 주는 모듈이다.

## 2.요구분석

사용자 요구사항은 총 3가지로 나타낼 수 있었다.<br>
1)사용자 요구사항<br>
-기존 중고장터의 불편함 – 중고 책을 위한 간편한 중고장터가 있으면 좋겠다.<br>
-중고장터 커뮤니티 분산화 - 에브리타임/세종대역/중고나라 등 너무 퍼져있어서 일일이 찾아다녀야 함.<br>
-중고 책 자동 시세측정 - 같은 종류의 책에 대한 중고 가격이 확실하게 형성된 것이 아니라서 중고 책을 팔 때 가격 선정이 애매하다.<br>
이러한 요구사항을 통해 요구분석을 한 결과,<br>
<br>
2)요구분석<br>
-기존 중고장터의 불편함 - 학생들의 편의를 고려해서 중고 책에 초점을 맞춰서 개발을 진행하되, 중고장터를 구축하고 사용자 편의성까지 고려하기엔 무리가 있다고 판단, 이에 관련하여 모듈 수준으로 구축<br>
-중고장터 커뮤니티 분산화- 통합적인 중고장터를 개발하기에는 고려해야 될 사항이 많아서 고려하지 않기로 결정<br>
-중고 책 자동 시세측정- 대규모 중고 책 거래 사이트의 데이터를 활용하여 중고가격을 자동적으로 측정<br>
으로 도출할 수 있었다.<br>
<br>
3)설계<br>
본격적으로 해당 모듈의 설계를 한다. 우선, 사용자 중심으로 사용자가 본 모듈을 사용하는 순서를 설계한다. <br>
<br>
&nbsp; 1.사용자 사용 과정 <br>
&nbsp; &nbsp; (1)사용자가 팔려고 하는 중고 책을 사진으로 찍는다.<br>
&nbsp; &nbsp; (2)사용기간 등 중고 책의 상태를 입력한다.<br>
&nbsp; &nbsp; (3)책인지 아닌지 판별 후 책의 중고 가격을 서버를 통해 검색한 결과와 사용자가 입력한 기타 정보를 토대로 적절한 중고 책 거래 가를 자동으로 측정해준다.<br>

이를 토대로 우리의 모듈 및 클라이언트의 작동 원리 및 순서를 설계한다.<br>
<br>
&nbsp; 2.모듈 작동 과정<br>
(클라이언트) 머신러닝을 통해 책인지 아닌지 판별 [*책이 아니라면 사진을 다시 찍게 한다.]<br>
(클라이언트) 머신러닝을 통해 사진 속 책의 제목을 분석하여 String 값으로 데이터화<br>
(클라이언트) 사진에 대한 데이터를 서버로 전송<br>
(서버) 추출한 제목을 통해 Naver API를 이용하여 검색 후 책의 ISBN 번호 얻기<br>
-----------------------------------------------------<br>
**CASE1 DB에 이미 있는 ISBN의 경우<br>
 (서버, 클라이언트)클라이언트에 해당 ISBN의 중고 거래 가격 전송<br>
**CASE2 DB에 없는 ISBN의 경우<br>
 (서버) 얻게 된 ISBN으로 알라딘 API를 통해 책의 중고거래 가격 검색<br>
 (서버, 데이터베이스) ISBN과 중고거래 가격 데이터베이스에 저장<br>
 (서버) 검색된 중고거래 가격 클라이언트로 전송<br>
-----------------------------------------------------<br>
(클라이언트) 서버에서 받은 가격을 자체 Aging(가칭) 기법을 적용한 공식에 중고거래 가격을 도입하여 적정 중고가 도출<br>
(클라이언트) 사용자에게 출력<br>

## 3. 시스템구성도

![시스템구성도1](/assets/img/project/BookPrice/sysarch.png)

우선 통신은 모두 http통신으로 이루어지고 사용자는 책에 대한 상태를 체크하고 사진을 찍습니다.<br>
머신러닝을 통해서 책인지 아닌지를 판별하고 책일 경우에는 책의 제목을 추출해서 서버로 보내줍니다.<br>
서버는 책의 제목을 이용해서 isbn코드를 찾고 원가와 중고가를 산출합니다. <br>
이는 데이터베이스에 저장이 되고 그 후 사용자에게 중고가를 알려줍니다.<br>
중고가 알고리즘의 경우 실제 중고사이트에서 데이터 3천개 가량을 수집해서 만들었으며, 자세한 설명은 아래에서 후술하겠습니다.

<a href="#중고가-책정-알고리즘-수식-구현" style="color: #5779ff">
<U>바로가기</U></a>

우리의 본 알고리즘(UP Algoritm)이 효율적이라는 것을 대립가설이라 하고, 이 가설에 우리가 조사한 3000개의 표본을 R을 이용하여 가설검정을 시행하였다. <br>
3천개의 난수를 생성하여 X에 대한 95%신뢰구간을 구하는 작업을 100번 반복했을때, 100개의 신뢰구간 가운데 참값을 가지는 표본(대립가설을 만족하는 표본)을 포함하고 있는 것의 비율은 96%정도로, 반복시행 하였을때 95% 근방의 값을 가짐을 구할 수 있었다.

### 시연 예시
<br>
<br>

![예시1](/assets/img/project/BookPrice/sample1.PNG)

![예시2](/assets/img/project/BookPrice/sample2.PNG)

### 기능 구현
<br>
제가 구현한 기능 위주로 작성하였습니다.
<br>

## 카메라

모든 기능이 작동하기 위한 전제인 사진촬영 및 사진 가져오기 기능이다. 본 기능은 카메라, 저장소 권한을 불러와야 하기 때문에, <br>
{% highlight java linenos %}
//AndroidManifest.xml

<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.CAMERA"/>
{% endhighlight %}
권한을 추가해 줍니다.<br>
또한, AOS 6.0 이상 버전부터 사용자에게 권한을 다시 한번 물어야 하기 때문에, PermissionUtils.java 파일을 생성 후, 권한을 사용자에게 물어주는 코드를 작성한다. 그 후, 카메라 및 갤러리를 최초 작동할 때 사용자에게 권한을 묻습니다.<br>
화면 UI 하단의 fab 아이콘을 클릭하면, 카메라를 실행할 수 있습니다. <br>
<br>

{% highlight java linenos %}
Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
Uri photoUri = FileProvider.getUriForFile(this, getApplicationContext().getPackageName() + ".provider", getCameraFile());
intent.putExtra(MediaStore.EXTRA_OUTPUT, photoUri);
intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
startActivityForResult(intent, CAMERA_IMAGE_REQUEST);
{% endhighlight %}

이렇게 하면 카메라로 촬영한 결과가 onActivityResult로 넘어갑니다. 여기서 서버전송 및 화면에 출력하기 위해 bitmap으로 변환해야 합니다.<br>
이렇게 변환된 이미지를 화면에 띄웠는데 자꾸만 90도 회전된 상태로 띄워지게 되는 현상이 발생하였습니다. <br>
따라서 <br>
<br>
{% highlight java linenos %}
//MainActivity.java

if (exif != null) {
exifOrientation = exif.getAttributeInt(ExifInterface.TAG_ORIENTATION, ExifInterface.ORIENTATION_NORMAL);
exifDegree = exifOrientationToDegrees(exifOrientation);} else {exifDegree = 0;
{% endhighlight %}
이러한 방식으로 이미지를 90도 회전시켜 출력할 수 있게 설정하였습니다.<br>
본 현상은 이미지뷰 레이아웃의 정해진 크기 때문에 클라이언트가 자체적으로 크기를 최대한 CenterCrop하기 위하여 회전하여 맞추어 지기 때문에 발생됩니다.<br>
스마트폰은 가로가 세로보다 짧지만, 이미지뷰의 크기는 가로가 세로보다 길기 때문에 자꾸만 회전되어 출력되는 현상입니다.<br>
<br>

## 서버-어플리케이션 간 HTTP 통신

http 통신은 RequestHttpURLConnection을 통하여 연결하거나, okHttp 라이브러리를 사용하여 연결이 가능합니다.<br>
라이브러리를 사용하는 것 보다는, 처음 HTTP통신을 시도해 보는 것이기 때문에 안드로이드 기본 제공 메소드를 통해 구현하기로 하였습니다.<br>
우선 Http통신을 관리해 줄 RequestHttpURLConnection.java를 따로 생성합니다.<br>

{% highlight java linenos %}
//RequestHttpURLConnection.java

public class RequestHttpURLConnection {
    public String request(String _url, ContentValues _params) {
        // HttpURLConnection 참조 변수.
        HttpURLConnection urlConn = null;
        // URL 뒤에 붙여서 보낼 파라미터.
        StringBuffer sbParams = new StringBuffer();
        /**
         * 1. StringBuffer에 파라미터 연결
         * */
        // 보낼 데이터가 없으면 파라미터를 비운다.
        if (_params == null)
            sbParams.append("");
            // 보낼 데이터가 있으면 파라미터를 채운다.
        else {
            // 파라미터가 2개 이상이면 파라미터 연결에 &가 필요하므로 스위칭할 변수 생성.
            boolean isAnd = false;
            // 파라미터 키와 값.
            String key;
            String value;
            for (Map.Entry<String, Object> parameter : _params.valueSet()) {
                key = parameter.getKey();
                value = parameter.getValue().toString();

                // 파라미터가 두개 이상일때, 파라미터 사이에 &를 붙인다.
                if (isAnd)
                    sbParams.append("&");
                sbParams.append(key).append("=").append(value);

                // 파라미터가 2개 이상이면 isAnd를 true로 바꾸고 다음 루프부터 &를 붙인다.
                if (!isAnd)
                    if (_params.size() >= 2)
                        isAnd = true;
            }
        }
        /**
         * 2. HttpURLConnection을 통해 web의 데이터를 가져온다.
         * */
        try {
            URL url = new URL(_url);
            urlConn = (HttpURLConnection) url.openConnection();

            // [2-1]. urlConn 설정.
            urlConn.setRequestMethod("POST"); // URL 요청에 대한 메소드 설정 : POST.
            urlConn.setConnectTimeout(3000);//연결 요청시 3초의 대기시간
            urlConn.setReadTimeout(3000);//
            urlConn.setRequestProperty("Accept-Charset", "UTF-8"); // Accept-Charset 설정.
            urlConn.setRequestProperty("Context_Type", "application/x-www-form-urlencoded;cahrset=UTF-8");
            // [2-2]. parameter 전달 및 데이터 읽어오기.
            String strParams = sbParams.toString(); //sbParams에 정리한 파라미터들을 스트링으로 저장. 예)id=id1&pw=123;
            OutputStream os = urlConn.getOutputStream();
            os.write(strParams.getBytes("UTF-8")); // 출력 스트림에 출력.
            os.flush(); // 출력 스트림을 플러시(비운다)하고 버퍼링 된 모든 출력 바이트를 강제 실행.
            os.close(); // 출력 스트림을 닫고 모든 시스템 자원을 해제.
            // [2-3]. 연결 요청 확인.
            // 실패 시 null을 리턴하고 메서드를 종료.
            if (urlConn.getResponseCode() != HttpURLConnection.HTTP_OK)
                return null;
            // [2-4]. 읽어온 결과물 리턴.
            // 요청한 URL의 출력물을 BufferedReader로 받는다.
            BufferedReader reader = new BufferedReader(new InputStreamReader(urlConn.getInputStream(), "UTF-8"));
            // 출력물의 라인과 그 합에 대한 변수.
            String line;
            String page = "";
            // 라인을 받아와 합친다.
            while ((line = reader.readLine()) != null) {
                page += line;
            }
            return page;
        } catch (MalformedURLException e) { // for URL.
            e.printStackTrace();
        } catch (IOException e) { // for openConnection().
            e.printStackTrace();
        } finally {
            if (urlConn != null)
                urlConn.disconnect();
        }
        return null;
    }
}
{% endhighlight %}

그리고 그 안에 URL과 URL뒤에 붙여서 보낼 파라미터를 생성하고, POST요청 및 응답된 파라미터 값을 string으로 저장해줍니다.<br>
이렇게 생성을 완료하였으면 MainActivity에서 HTTP통신을 원하는 부분에<br>
RequestHttpURLConnection requestHttpURLConnection = new RequestHttpURLConnection();<br>
result = requestHttpURLConnection.request(turl, values);를 추가해 주면, resutl의 String값으로 URL응답이 넘어오게 됩니다.<br>
HTTP통신은 비동기 작업으로 처리해야 하며, 이는 AsyncTask의 doInBackground메소드에서 처리해야 함을 의미합니다.<br>
<br>

{% highlight java linenos %}
//MainActivity.java

public class NetworkTask extends AsyncTask<String, Void, String>{
...
@Override
protected void onPreExecute(){ ... }
@Override
protected String doInBackground(String... params){ //HTTP통신부 }
@Override
protected void onPostExecute(String s){ ... }
...}
{% endhighlight %}
<br>
<br>

## Google Cloud Vision API

구글 Cloud Vision API은 이미지에서 얼굴인식, 랜드마크탐지, 사물감지, 텍스트 인식, 로고, 부적절한 이미지 감지 등 다양한 기능이 있습니다.

자세한 내용은 구글 클라우드 플랫폼 내의 클라우드비전을 참고해주세요!!

<https://cloud.google.com/vision/>

구글 클라우드 기능 중 text인식과 object detection 기능을 사용하면 됩니다.

해당 클라우드 메소드 중, callCloudVision 메소드 안에

{% highlight java linenos %}
//MainActivity.java

annotateImageRequest.setFeatures(new ArrayList<feature>(){
    { 
        Feature labelDetection = new Feature();
        labelDetection.setType("LABEL_DETECTION");
        labelDetection.setMaxResults(10);
        add(labelDetection);
    }});
{% endhighlight %}

이부분에서 labelDetection.setType("LABEL_DETECTION"); 은

클라우드 비전이 어떤 기능을 사용할지 알려줍니다. 예제는 LABEL_DETECTION 으로 이미지에대한 정보를 알려줍니다 .<br>
LABEL 뿐만아니라 텍스트, 랜드마크, 로고 등 여러가지 키워드가 있습니다.

구글 클라우드 비전API의 작동 순서는
LABEL_DETECTION에서 BOOK이라고 판별했을 경우, TEXT_DETECTION 수행해야 하기 때문에,
<br>
<br>
{% highlight java linenos %}
//MainActivity.java

try {
        if(selectMode==1) {//책 판별
            AsyncTask<Object, Void, String> labelDetectionTask = new LableDetectionTask(this, prepareAnnotationRequest(bitmap));
            labelDetectionTask.execute();
        }else if(selectMode==2){//텍스트 판별
            AsyncTask<Object, Void, String> labelDetectionTask = new LableDetectionTask2(this, prepareAnnotationRequest(bitmap));
            labelDetectionTask.execute();
        }
    } catch (IOException e) {
        Log.d(TAG, "failed to make API request because of other IOException " +
                e.getMessage());
    }
{% endhighlight %}

로 두어 기능이 변경되도록 설정하였습니다.

또한, 판별된 텍스트를 사용자에게 보여주기 위해 
<br>
<br>
{% highlight java linenos %}
protected void onPostExecute(String result) {
                mBookTitle.getText().toString()
            }
{% endhighlight %}

을 사용하여 AlertDialog에 표시되도록 설정하였습니다.
<br>
<br>

### 문제점 및 해결 방안

## 머신러닝의 선택

본 모듈을 기획할 당시, 책인지를 판별해 주는 Object Detection/ Recognized Text 머신러닝 기술을 활용할 수 있는 API를 조사하던 도중, Firebase ML Kit와 Google Cloud Vision API 두 가지가 존재하였다.<br>우선 Firebase ML Kit로 적용해본 결과, Firebase ML Kit의 Object Detection 에는 book 이라는 object를 판별할 수 없었고, 따라서 차선책인 Google Cloud Vision을 적용하였다.

## 중고가 책정 알고리즘 수식 구현

시중에 판매되는 중고 책 데이터를 약 3000개가량을 직접 수집하여, 해당 중고 가격들을 조사하는 도중, 해당 가격들이 일정 분포에 따라 밀집되어 있는 것을 확인하고, 이 분포를 SS / S / A / B / C 5등급으로 나누었다.<br>
우리의 모듈에서 책의 상태를 평가하는 요소는 ‘얼룩/훼손도/구입년도’ 3가지이다.<br>
표본들을 살펴보던 중, 얼룩/훼손도가 구입년도 보다 훨씬 중고 책 가격에 영향을 많이 끼치는 것을 파악하였고, 그 비중은 약 2:1의 비중으로 가치가 떨어지는 것을 확인하였다.<br>
즉, 각 평가요소에서 가격을 평가하는 비중이 2:2:1이라는 소리가 된다.<br>
또한, 각 요소는 “매우 좋음” “보통” “매우 나쁨” 3가지로 가치를 매기게 되었을 경우, 이에 대한 점수를 매기게 된다.<br>
우선, 시중에 판매되는 중고 책 표본이 위와 같이 품질 중~최상이 최하~중 표본보다 압도적으로 많기에, 최하~중급의 품질 중고 책은 크게 신경 쓸 것이 아니며, 실제로 잘 판매도 되지 않았기 때문에 논외로 하였다. <br>따라서 중고 책 판별 알고리즘은 Yes24에서 판매되는 “평균” 중고가격에서 일정 가산 치로 환산하여 “판매가” 보다는 낮은 “적정 중고 판매가”를 구하는 방식으로 도출하였다.<br>
평균 중고판매가를 U로 하고, 새 상품 “판매가”를 P로 하였을 때, 우리의 자체 등급인 SS/S/A/B/C 5단계로 나누기 위하여 (P-U)/5, 그 후 위의 책 상태 평가요소인 3가지의 가중치에 따른 세부 가격도출을 위하여 경우의 수를 상정하였다.<br>
각 평가요소의 비중이 2:2:1이고, (P-U)/5에서 결정변수 X를 곱하는 형식이기 때문에, X는 최대 4를 넘기지 않으며 각 세부비중은 0.5 0.5 0.25로써, “매우 좋음” 1.5점/ “보통” 1점 / “매우 나쁨” 0.5점 ... “1년 이내” 1점/ “5년 이내” 0.75점/ “10년 이내” 0.5점으로 환산하여 각 평가요소에게 점수를 매긴 후 해당 수치인 결정변수를 곱하는 형식으로 도출하였다.<br>
위 식을 토대로 수집한 표본에 대하여 R 프로그램을 통한 시뮬레이션 결과, 신뢰도 정도의 정확도를 도출할 수 있었다.<br>
발생한 오차의 분석은, 급매로 시장에 등록하거나, 마음대로 가격을 결정하는 등 표준에 따르지 않은 오차들이 대부분이었다. 우리 모듈은 말 그대로 “적정” 중고 책 판매가를 계산하는 것이기 때문에 위와 같은 예외는 크게 신경쓰지 않기로 하였다.<br>

### 기대효과 및 성과

## 기대효과

현재 본 모듈은 책인지 아닌지를 판별하지만 더 나아가서 책뿐만 아니라 사물의 판별까지 가능해 진다면 기존의 중고 판매 사이트인 중고나라와 아마존 옥션 등의 기업에 판매하여 수익성을 기대할 수 있습니다.

## 성과

![성과](/assets/img/project/BookPrice/awards.png)

해당 모듈은 세종대학교 7회 창의설계경진대회에서 최우수상을 수상하였습니다.

### Contact
<br>
<a href="https://github.com/ehaken95/BookPrice"  style="color: #5779ff" target="_blank">
<U>Android Source 바로가기</U></a>
<br>
<br>
> email : seojj95@naver.com
>
> by 서성준, 남기범, 김신욱, 유경수

---
layout: post
title: "CapStone Design(산학협력프로젝트)"
date: 2019-09-06 21:00:00 +0900
category: project
period: 2019.03.01~2019.06.07
description: 세종대학교 고전독서 인증관리 어플리케이션 개발
more_details: [ "java", "android", "aws", "linux", "swift", "git", "mysql", "nodejs"]
---
세종대학교 SW융합대학 주관 캡스톤 디자인 산학협력 프로젝트

## Member

이름 | 역할
:--: | :--:
서성준 | Android App 개발 & AWS 구축
남기범 | IOS App 개발 & Back-end 구축
김신욱 | DB 구축 & Android App 개발
유경수 | Back-end 구축

## Environment

Language | back-end | DB
:---: | :---: | :---:
Java / Swift / Javascript | AWS EC2 Linux / Node.js / Express.js / Phantom.js | MySQL

### 개발 목표

세종대학교 고전독서시스템에 대한 현 상황으로써,

-웹사이트로만 구현 되어 있는 대양 휴머니티 사이트 접속의 불편하다는 점과 사이트의 존재조차 학생들이 모른다는 점

-시험 예약의 번거로움과 시험에 대한 no show

-고전독서 관리 페이지와 도서대여 홈페이지가 독립적으로 운행되어서 인증 관리와 도서 대여가 한 페이지에서 이루어지지 않아 번거로움을 초래 한다는 것.

또한, 세종대 학생이라면 필수적으로 거쳐야할 고전독서 인증제에 대하여 학생들에게 설문조사를 실시하였고, 결과는 많은 학생들이 인증제가 있다는 것은 인지하고 있지만, 대양휴머니티 칼리지 사이트에서 운영하고 있다는 사실은 응답자 중 절반이 모르는 상황이었다.

이에 따라, 학생들의 실용성과 편의성 향상을 위하여 사용자의 고전 독서 인증 정보를 확인 할 수 있는 기능과 시험 1시간 전 알림 기능 그리고 어플리케이션을 통한 고전 독서 인증 시험 예약 기능, 마지막으로 학술정보원 도서 검색 기능 등 사용자 요구사항을 최대한 반영한 어플리케이션을 만드는 것이 목표다.

### 설계 사양서

## 1.프로젝트 방향

해당 프로젝트는 세종대 학생들의 고전독서 관리를 위한 어플리케이션이다.

## 2.Use-Case Diagram & Class Diagram

>Use-Case


![use-case](/assets/img/project/ClassicBook/use-case.png)

>Class Diagram


![class-diagram](/assets/img/project/ClassicBook/class-diagram.png)


## 3.내용 구성

![내용1](/assets/img/project/ClassicBook/sample1.PNG)

![내용2](/assets/img/project/ClassicBook/sample2.PNG)

## 4.구현 설명

![시스템구성](/assets/img/project/ClassicBook/sys-arch.PNG)

NPM 모듈인 Phantomjs라는 것을 사용해 현재 운행되고 있는 대양휴머니티 칼리지 웹 사이트에 실제로 로그인할 수 있도록 연동하였다.

어플리케이션에서 입력된 학번과 비밀번호를 서버에 전송하여 Phantomjs를 통해 로그인 정보가 일치하는지 아닌지 판별하고, 일치할 경우 사용자의 고전독서 인증 정보를 크롤링해와서 자료를 어플리케이션으로 전송한다.

독서당 시험 예약의 경우, 서버에서 MySQL을 연동하여 자체적인 데이터를 구축해서 구현하였다. 사용자가 예약정보를 서버로 전송하면 DataBase에 저장된다.

독서당 시험 1시간 전 알림은 예약한 시험 예약 정보를 기반으로 1시간 전 알림을 구현했다. 자체적인 라이브러리를 사용하여 정해진 시간이 되면 알림이 온다. 

학술정보원 고전독서 검색 기능은 학술정보원 웹 페이지에서 ISBN으로 검색한 결과를 크롤링하여 구현하게 되었다.

### Android + Linux
<br>
제가 구현한 기능 위주로 작성하였습니다.
<br>

## 자동 로그인

SharedPreferences를 이용하여 자동로그인을 구현하였습니다. 본 어플 사용 특성상, 사용자B가 사용자A의 스마트폰에서 로그인하는 경우는 없다고 판단하여 본 메소드를 적용하였습니다.

본 로그인은, phantom.js가 구동되고 있는 AWS EC2 서버에 ID와 PW를 요청하면 phantom.js가 실제 웹사이트에 접속하여 로그인을 한 뒤, 원하는 정보를 파싱하여 클라이언트에 전송해 주는 방식입니다.


{% highlight java linenos %}
//자동로그인 정보 저장
SharedPreferences pref = PreferenceManager.getDefaultSharedPreferences(this);
String auID = pref.getString("ID","null");
String auPW = pref.getString("PW","null");

//자동로그인시 바로 로그인 시도
if(pref.getString("auto_login","0").equals("1")){
    autoLogin.setChecked(true);
    System.out.println("login info : " + auID + auPW);
    text_id.setText(auID);
    text_pw.setText(auPW);
    String url = loginURL + loginID + auID + loginPW + auPW;
    LoginTask loginTask = new LoginTask(url,null);
    loginTask.execute();
}
{% endhighlight %}

자동로그인 체크박스에 체크를 하고 로그인 시도를 하게 되면 로그인을 시도한 시점의 ID와 PW를 저장합니다.
이후 어플리케이션 재실행 시 자동로그인을 시도한 기록이 있기 때문에 이전 로그인했던 ID와 PW를 불러와 자동으로 로그인을 시도합니다.

로그인을 하는 과정은 서버와 비동기 통신을 해야 하는 과정이기 때문에 AsyncTask를 사용하였습니다.

{% highlight java linenos %}
public class LoginTask extends AsyncTask<String, Void, String>{
    SweetAlertDialog pDialog = new SweetAlertDialog(LoginActivity.this,SweetAlertDialog.PROGRESS_TYPE);
    private String url;
    private ContentValues values;
    private LoginTask(String url, ContentValues values) {
    this.url = url;
    this.values = values;
    }
    @Override
    protected void onPreExecute(){
        //..
        //..login progress bar
        //..
    }
    @Override
    protected String doInBackground(String... params) {
        String turl = url;
        String result;
        RequestHttpURLConnection requestHttpURLConnection = new RequestHttpURLConnection();
        result = requestHttpURLConnection.request(turl, values);
        System.out.println(result);
        return result;
    }
    @Override
    protected void onPostExecute(String result){
        pDialog.dismiss();
        super.onPostExecute(result);
        try {
            JsonParser Parser = new JsonParser();
            JsonObject jsonObj = (JsonObject) Parser.parse(result);
            JSONParser jsglobal = (JSONParser)getApplicationContext();
            //..
            //..setting parse data
            //..
            for(int i = 0;i<jsglobal.getStat_auth().size();i++){
                JsonObject object = (JsonObject)jsglobal.getStat_auth().get(i);
                //..
                //..setting parse data
                //..
            }
            //..
            //..setting parse data
            //..

            if(jsglobal.getStat().equals("0")){
                new SweetAlertDialog(LoginActivity.this, SweetAlertDialog.ERROR_TYPE)
                        .setTitleText("오류")
                        .setContentText("ID와 PW를 확인해 주세요")
                        .show();
            }else {
                Intent intent = new Intent(LoginActivity.this, MainActivity.class);
                startActivity(intent);
                finish();
            }
        }catch (NullPointerException e){
            new SweetAlertDialog(LoginActivity.this, SweetAlertDialog.ERROR_TYPE)
                    .setTitleText("오류")
                    .setContentText("서버와의 통신이 원활하지 않습니다. \n다시 시도해 주세요")
                    .show();
        }
    }
}
{% endhighlight %}

로그인성공 후 서버에서 파싱해온 고전독서 인증정보들은 전역 클래스에 별도로 저장됩니다. 이 데이터들은 어플리케이션 종료 시 삭제됩니다.

## RecyclerView

안드로이드 UI구성은 BottomNavigationView로 구성되었으며, 각각의 Fragment에 RecyclerView를 동적으로 적용하여 스크롤이 가능하도록 하였습니다.

{% highlight java linenos %}
public class RecyclerAdapter_Setting extends RecyclerView.Adapter<RecyclerAdapter_Setting.ItemViewHolder> {

    // adapter에 들어갈 list
    private ArrayList<Data_Recycle_Setting> listData1 = new ArrayList<>();
    public Context context;
    @NonNull
    @Override
    public ItemViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        // LayoutInflater를 이용하여 전 단계에서 만들었던 item.xml을 inflate 시킵니다.
        // return 인자는 ViewHolder 입니다.
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.recycle_settings, parent, false);
        context = parent.getContext();
        return new ItemViewHolder(view);
    }
    @Override
    public void onBindViewHolder(@NonNull ItemViewHolder holder, int position) {
        holder.onBind(listData1.get(position));
    }
    @Override
    public int getItemCount() {
        //TO DO
    }
    void addItem(Data_Recycle_Setting data) {
        //TO DO
    }
    // RecyclerView의 핵심인 ViewHolder 입니다.
    // 여기서 subView를 setting 해줍니다.
    class ItemViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener{
        //TO DO
    }
}
{% endhighlight %}

## Alarm (with Oreo)

안드로이드 버전이 8.0으로 넘어가면서, 기존 사용하던 기타 여러 가지 기능들이 더이상 사용할 수 없거나, 다른 방법을 찾아야 하는 경우가 생겼습니다. 그 중 알람기능인 Notification Channel 에 대한 대응책을 마련해야 하는 상황이었습니다.

안드로이드 OS 8.0부터는 별도의 Notification Channel을 만들어주어야 하며 createNotificationChannel()을 호출해주면 됩니다. 

{% highlight java linenos %}
if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O){
    int importance = NotificationManager.IMPORTANCE_HIGH;
    NotificationChannel notificationChannel = new NotificationChannel(channelId, channelName, importance);
    notificationManager.createNotificationChannel(notificationChannel);
}
{% endhighlight %}

이렇게 설정해 두면 선택한 시간에 상단바 Notification이 울립니다.

## AWS

AWS EC2 학생 프리티어 12개월을 이용하여, AWS Linux서버를 구축하였습니다.

서버를 구축한 뒤, Elastic IP를 할당받아 고정IP를 부여받았습니다.

AWS Linux 내에서 Node.js파일을 24시간 가동하기 위하여 forever모듈을 설치하였습니다.

{% highlight linux linenos %}
$ npm install forever -g
$ forever start app.js
{% endhighlight %}

하지만 구동 약 15시간 뒤에 알 수 없는 Crash로 인하여 forever는 구동되고 있으나 runtime error가 발생하는 증상을 보였습니다.

이는 Node.js 코드 내의 url이 main.js를 시작시키고 정상적으로 휴무상태에 들어가야 하지만, forever는 휴무상태 없이 그대로 돌고 있기 때문에, 자원낭비를 계속하게 되고 결국은 코드가 죽어버리는 현상이 발생하는 것이었습니다.

따라서, 다른 자원 관리 모듈인 pm2를 설치하였으며, 그 후 아무런 문제 없이 정상 작동하였습니다.

{% highlight linux linenos %}
$ npm install pm2 -g
$ pm2 start app.js
{% endhighlight %}

### Contact
<br>
<a href="https://github.com/ehaken95/ClassicBook"  style="color: #5779ff" target="_blank">
<U>Android Source 바로가기</U></a>
<br>
<br>
> email : seojj95@naver.com
>
> by 서성준, 남기범, 김신욱, 유경수
<br>
<br>
SW등록번호 C-2019-017229<br>

<a href="https://www.cros.or.kr/ntis/CtPgmPopInfo.cc?regid=C-2019-017229"  style="color: #5779ff" target="_blank"><U>등록정보보러가기</U></a>

<br>
"본 연구는 과학기술정보통신부 및 정보통신기술진흥센터의 SW중심대학 사업의 연구결과로 수행되었음"(2015-0-00938)

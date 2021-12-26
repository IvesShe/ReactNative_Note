# React Native筆記

很多細節需要被記錄

官網

https://reactnative.cn/

![image](./images/20211224212342.png)

# 環境搭建

https://reactnative.cn/docs/environment-setup

所需要軟體

- android
- java jdk 1.8
- node v12.10.0
- python 2.x (2.7.X)
- genymotion-2.12.2

## 安裝python

https://www.python.org/downloads/release/python-2715/

![image](./images/20211224212058.png)

解決在 Windows 命令提示字元輸入 python 跳出 Windows 商店的問題

https://kheresy.wordpress.com/2020/05/06/fix-the-issue-that-open-windows-store-when-execute-python/


設置環境變數

https://ericjhang.github.io/archives/ad5450f3.html

```bash
PYTHON_HOME
C:\Python27\
```

![image](./images/20211224211742.png)

```bash
%PYTHON_HOME%

```

![image](./images/20211224212008.png)

```bash
python
```

![image](./images/20211224212028.png)

## java jdk 1.8

https://www.oracle.com/java/technologies/downloads/#java8

![image](./images/20211225103243.png)

```bash
JAVA_HOME
C:\Program Files\Java\jdk1.8.0_291
```

![image](./images/20211225112349.png)

![image](./images/20211225112415.png)

```bash
%JAVA_HOME%\bin
```

![image](./images/20211225112538.png)

```bash
java
```

![image](./images/20211225112716.png)

```bash
javac
```

![image](./images/20211225112728.png)

## Android Studio

https://developer.android.com/studio#downloads

![image](./images/20211224212028.png)


SDK Manager 还可以在 Android Studio 的"Preferences"菜单中找到。具体路径是Appearance & Behavior → System Settings → Android SDK。

在 SDK Manager 中选择"SDK Platforms"选项卡，然后在右下角勾选"Show Package Details"。展开Android 10 (Q)选项，确保勾选了下面这些组件（重申你必须使用稳定的代理软件，否则可能都看不到这个界面）：

Android SDK Platform 29
Intel x86 Atom_64 System Image（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件)
然后点击"SDK Tools"选项卡，同样勾中右下角的"Show Package Details"。展开"Android SDK Build-Tools"选项，确保选中了 React Native 所必须的29.0.2版本。你可以同时安装多个其他版本。

然后还是在"SDK Tools"选项卡，点击"NDK (Side by side)"，同样勾中右下角的"Show Package Details"，选择20.1.5948944版本进行安装。

最后点击"Apply"来下载和安装这些组件。

SDK Manager

![image](./images/20211225113959.png)

Android SDK Platform 29
Intel x86 Atom_64 System Image

![image](./images/20211225114338.png)

SDK 29.0.2

![image](./images/20211225114112.png)

NDK 20.1.5948944 
![image](./images/20211225114253.png)

確認

![image](./images/20211225114417.png)

安裝

![image](./images/20211225114438.png)


SDK 默认是安装在下面的目录：

C:\Users\你的用户名\AppData\Local\Android\Sdk

我的

C:\Users\IvesShe\AppData\Local\Android\Sdk

設置環境變量

```bash
ANDROID_HOME
C:\Users\IvesShe\AppData\Local\Android\Sdk
```

![image](./images/20211225142341.png)

![image](./images/20211225142620.png)

 把一些工具目录添加到环境变量 Path
打开控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量，选中Path变量，然后点击编辑。点击新建然后把这些工具目录路径添加进去：platform-tools、emulator、tools、tools/bin

%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin

```bash
adb devices
```

![image](./images/20211225143004.png)

# Genymotion

![image](./images/20211225143225.png)

![image](./images/20211225143347.png)

# 創建項目

```bash
npx react-native init rn_demo
```

![image](./images/20211225145844.png)

```bash
adb devices
```

![image](./images/20211225150929.png)

```bash
npx react-native run-android
```

![image](./images/20211225150938.png)

![image](./images/20211225150946.png)

![image](./images/20211225150925.png)



# android strudio

連接usb手機裝置

手機本身要開啟開發者模式，並且打開usb調試

參考資料 

https://mnya.tw/cc/word/1458.html

https://www.jianshu.com/p/6131cbe22bea

安裝usb連接的sdk

![image](./images/20211225185441.png)

![image](./images/20211225185457.png)


從手機開啟

![image](./images/S47472643.jpg)

# 創帶版本號的新項目

```bash
 npx react-native init react_native_demo --version 0.55.4

```

# 安裝WebView

https://github.com/react-native-webview/react-native-webview/blob/HEAD/docs/Getting-Started.md

```bash
 npm install --save react-native-webview
```

```bash
npx react-native link react-native-webview
```

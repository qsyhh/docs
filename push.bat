@echo off
git add .
git commit -m UP
git push
REM 推送失败
if ERRORLEVEL 1 (
echo git push 失败。是否要使用 git push -f 强制推送？ (y/n)
set /p response=
if /i "%response%"=="y" (
git push -f
  ) else (
echo 未执行强制推送。
  )
) else (
echo git push 成功。
)

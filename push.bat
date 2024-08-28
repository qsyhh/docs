git add .
git commit -m UP
@echo off
REM 尝试执行 git push
git push

REM 检查 git push 的退出代码
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

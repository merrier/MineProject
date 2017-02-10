#include <stdio.h>
#include <string.h>
int main()
{
    char a1[1000];
    char a2[1000];
    int *p;
    printf("请输入数据：");
    gets(a1);
    gets(a2);
    printf("a1=%s,a2=%s",a1,a2);
    if(strlen(a1)<10000 && strlen(a2)<10000)
    {

        do{
            char p = strchr(a2,a1);
            *p = strchr(p,a1);
            printf("p=%s",p);
        }while(*p);


    }
    return 0;
}
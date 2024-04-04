# Stage 1: Nginx 및 Certbot 설정
FROM nginx:alpine AS nginx_certbot

# 필요한 패키지 설치
RUN apk add --no-cache certbot certbot-nginx

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# HTTPS 포트 열기 (보통 443 포트 사용)
EXPOSE 443
EXPOSE 80

# Certbot을 사용하여 SSL 인증서 발급받기
# RUN certbot --nginx -d example.com
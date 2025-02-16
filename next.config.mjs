/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https", // Giao thức (https hoặc http)
                hostname: "lh3.googleusercontent.com", // Tên miền của ảnh
                port: "", // Cổng (nếu không sử dụng thì để trống)
                pathname: "/**", // Pattern khớp với tất cả đường dẫn con
            },
            {
                protocol: "https", // Giao thức https
                hostname: "i.pinimg.com", // Tên miền bạn muốn cho phép
                port: "", // Cổng (nếu không sử dụng thì để trống)
                pathname: "/**", // Pattern khớp với tất cả đường dẫn con
            },
            {
                protocol: "https", // Giao thức https
                hostname: "img.icons8.com", // Tên miền bạn muốn cho phép
                port: "", // Cổng (nếu không sử dụng thì để trống)
                pathname: "/**", // Pattern khớp với tất cả đường dẫn con
            },
        ],
    },
};

export default nextConfig;

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang chủ - Tin tức 24h</title>
    <style>
        /* CSS chung */
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, sans-serif; }
        body { background: #f8f9fa; }
        header { background: #004080; color: white; padding: 15px; text-align: center; }
        header h1 { margin-bottom: 10px; }
        nav ul { list-style: none; display: flex; justify-content: center; gap: 15px; }
        nav ul li a { text-decoration: none; color: white; font-weight: bold; padding: 8px 12px; transition: 0.3s; }
        nav ul li a:hover { background: rgba(255,255,255,0.3); border-radius: 5px; }
        main { max-width: 800px; margin: 20px auto; padding: 15px; background: white; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        h2 { color: #004080; margin-bottom: 10px; }
        article { border-bottom: 1px solid #ddd; padding: 10px 0; }
        article h3 a { text-decoration: none; color: #004080; font-size: 18px; font-weight: bold; }
        article p { color: #555; }
        footer { background: #004080; color: white; text-align: center; padding: 15px; margin-top: 20px; }
        button { background: #004080; color: white; padding: 8px 12px; border: none; border-radius: 5px; cursor: pointer; transition: 0.3s; }
        button:hover { background: #002d5f; }
    </style>
</head>
<body>
    <header>
        <h1>Tin tức 24h</h1>
        <nav>
            <ul>
                <li><a href="index.html">Trang chủ</a></li>
                <li><a href="category.html">Thế giới</a></li>
                <li><a href="category.html">Kinh tế</a></li>
                <li><a href="category.html">Giải trí</a></li>
                <li><a href="search.html">🔍 Tìm kiếm</a></li>
                <li><a href="login.html">Đăng nhập</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="news-list">
            <h2>Tin mới nhất</h2>
            <article>
                <h3><a href="article.html">Biến động chứng khoán: Nhà đầu tư lo lắng</a></h3>
                <p>Thị trường chứng khoán đang có nhiều biến động bất thường...</p>
            </article>
            <article>
                <h3><a href="article.html">Thời tiết cực đoan ảnh hưởng đến sản xuất</a></h3>
                <p>Miền Bắc đang trải qua đợt rét kỷ lục trong vòng 10 năm qua...</p>
            </article>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Tin tức 24h - Bản quyền thuộc về nhóm</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh mục - Tin tức</title>
    <style>
        /* Copy toàn bộ CSS từ trang chủ */
    </style>
</head>
<body>
    <header>
        <h1>Danh mục: Thế giới</h1>
        <nav>
            <ul>
                <li><a href="index.html">Trang chủ</a></li>
                <li><a href="category.html">Thế giới</a></li>
                <li><a href="category.html">Kinh tế</a></li>
                <li><a href="category.html">Giải trí</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="category-news">
            <article>
                <h3><a href="article.html">Xung đột khu vực leo thang: Cộng đồng quốc tế lo ngại</a></h3>
                <p>Căng thẳng giữa các quốc gia trong khu vực đang gia tăng, đặt ra nhiều thách thức về an ninh...</p>
            </article>
            <article>
                <h3><a href="article.html">Biến đổi khí hậu: Những tác động nghiêm trọng đến thế giới</a></h3>
                <p>Nhiệt độ trung bình toàn cầu tiếp tục gia tăng, gây ra nhiều hiện tượng thời tiết cực đoan và ảnh hưởng đến đời sống...</p>
            </article>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Tin tức 24h</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Tìm kiếm - Tin tức</title>
    <style>
        /* Copy toàn bộ CSS từ trang chủ */
    </style>
</head>
<body>
    <header>
        <input type="text" id="search-box" placeholder="Nhập từ khóa...">
        <button onclick="searchArticles()">Tìm kiếm</button>
    </header>
    <main>
        <section id="search-results">
            <!-- Hiển thị kết quả tìm kiếm ở đây -->
        </section>
    </main>
    <script>
        function searchArticles() {
            alert("Tính năng tìm kiếm đang phát triển!");
        }
    </script>
</body>
</html>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng ký / Đăng nhập</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Đăng ký/Đăng nhập</h1>
    </header>
    <main>
        <section id="register">
            <h2>Đăng ký</h2>
            <form action="register.php" method="POST">
                <label for="reg_username">Tên đăng nhập:</label>
                <input type="text" id="reg_username" name="username" required><br>
                
                <label for="reg_email">Email:</label>
                <input type="email" id="reg_email" name="email" required><br>
                
                <label for="reg_password">Mật khẩu:</label>
                <input type="password" id="reg_password" name="password" required><br>
                
                <label for="confirm_password">Xác nhận mật khẩu:</label>
                <input type="password" id="confirm_password" name="confirm_password" required><br>
                
                <button type="submit">Đăng ký</button>
            </form>
        </section>
        
        <section id="login">
            <h2>Đăng nhập</h2>
            <form action="login.php" method="POST">
                <label for="login_username">Tên đăng nhập:</label>
                <input type="text" id="login_username" name="username" required><br>
                
                <label for="login_password">Mật khẩu:</label>
                <input type="password" id="login_password" name="password" required><br>
                
                <button type="submit">Đăng nhập</button>
            </form>
            <p>Chưa có tài khoản? <a href="#register">Đăng ký ngay</a></p>
        </section>
    </main>
</body>
</html>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quản trị hệ thống</title>
    <style>
        /* Reset */
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, sans-serif; }
        
        /* Body */
        body { background: #f4f4f4; }
        
        /* Header */
        header { background: #333; color: white; padding: 15px; text-align: center; }
        header h1 { margin-bottom: 10px; }
        nav ul { list-style: none; display: flex; justify-content: center; gap: 15px; }
        nav ul li a { text-decoration: none; color: white; padding: 10px 15px; transition: 0.3s; }
        nav ul li a:hover { background: rgba(255,255,255,0.3); border-radius: 5px; }

        /* Main */
        main { max-width: 1000px; margin: 20px auto; padding: 15px; background: white; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        
        /* Cards */
        .dashboard { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; }
        .card { background: #007bff; color: white; padding: 20px; border-radius: 5px; text-align: center; font-weight: bold; cursor: pointer; transition: 0.3s; }
        .card:hover { background: #0056b3; }

        /* Footer */
        footer { background: #333; color: white; text-align: center; padding: 15px; margin-top: 20px; }
    </style>
</head>
<body>
    <header>
        <h1>Bảng điều khiển quản trị</h1>
        <nav>
            <ul>
                <li><a href="dashboard.html">Dashboard</a></li>
                <li><a href="manage_articles.html">Quản lý bài viết</a></li>
                <li><a href="manage_categories.html">Quản lý danh mục</a></li>
                <li><a href="manage_users.html">Quản lý người dùng</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>Thống kê</h2>
        <section class="dashboard">
            <div class="card">Bài viết: 120</div>
            <div class="card">Danh mục: 10</div>
            <div class="card">Người dùng: 450</div>
            <div class="card">Bình luận: 780</div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Hệ thống quản trị Tin tức 24h</p>
    </footer>
</body>
</html>

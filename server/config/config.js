// ===========================
// Puerto
// ===========================
process.env.PORT = process.env.PORT || 3000;

// ===========================
// Entorno
// ===========================

process.env.NODE_ENV = process.env.NODE_ENV || 'DTA';

// ===========================
// DB
// ===========================

let url_db;

if (process.env.NODE_ENV === 'DTA') {
    url_db = 'mongodb://localhost:27017/cafe';
} else {
    url_db = process.env.REMOTE_DB;
}

process.env.URL_DB = url_db;
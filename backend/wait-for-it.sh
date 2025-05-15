#!/bin/bash

host="$DB_HOST"
port="$DB_PORT"

echo "⏳ Waiting for MySQL at $host:$port..."

while ! mysqladmin ping -h"$host" --silent; do
  sleep 1
done

echo "✅ MySQL is up! Starting the server..."
exec node server.js

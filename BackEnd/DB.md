## Note
By default, this application connects to MongoDB in all environments.

Option 1: Set following variables in env files located at env/<dev / staging / prod>.env

| Database | Variable |
| ------------- | ------------- |
| MongoDB | `REPOSITORY.DEFAULT=MONGO` |

Option 2: Set CLI argument while running the application
| Database | TS CLI Argument | Built JS CLI Argument |
| ------------- | ------------- | ------------- |
| MongoDB | `ts-node ./src -r MONGO` | `node ./dist -r MONGO` |

## MongoDB config. Install MongoDB from [here](https://docs.mongodb.com/manual/administration/install-community/)

#### Step 1: Go to MongoDB Install path > bin > Open Terminal / CMD

#### Step 2: Open MongoDB CLI. Type following in Terminal / CMD:
```bash
mongo
```

#### Step 3: Create database. Type following in Terminal / CMD:
```bash
use test_db;
```

#### Step 4: Create user for database. Type following in Terminal / CMD:
```javascript
db.createUser({"user":"test_user","pwd":"test_pass","roles":[{"role":"userAdmin","db":"test_db"}]});
```

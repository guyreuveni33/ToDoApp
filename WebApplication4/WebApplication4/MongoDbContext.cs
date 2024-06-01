using MongoDB.Driver;

public class MongoDbContext
{
    private readonly IMongoDatabase _database;

    public MongoDbContext(IConfiguration configuration)
    {
        var connectionString = configuration["MongoSettings:ConnectionString"];
        if (string.IsNullOrEmpty(connectionString))
        {
            throw new InvalidOperationException("MongoDB connection string is not configured.");
        }

        var client = new MongoClient(connectionString);
        _database = client.GetDatabase(configuration["MongoSettings:DatabaseName"]);
    }


    public IMongoCollection<TodoItem> Todos => _database.GetCollection<TodoItem>("Todos");
}
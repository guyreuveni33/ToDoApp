using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
 
public class TodoItem
{
    [BsonId] //mark this as the primary key
    [BsonRepresentation(BsonType
        .ObjectId)] // as the object id isnt a native type in c#, we need to tell the driver how to map it
    public string Id { get; set; }
   // public string UserId { get; set; }  // Link to the User

    public string Value { get; set; }
    public string priorityColor { get; set; }

    [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
    public DateTime CreatedAt { get; set; } = DateTime.Now;
}
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace WebApplication4.Controllers;

[ApiController]
//this is the url that will be used to access the controller, will be minus the controller name, so in this case it will be /todos
[Route("[controller]")]
public class TodosController : ControllerBase
{
    private readonly MongoDbContext _context;

    public TodosController(MongoDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetTodos() //task is an async operation that have actions like ok, not found, etc
    {
        return Ok(await _context.Todos.Find(_ => true).ToListAsync()); //200 ok
    }

    [HttpPost]
    public async Task<IActionResult> AddTodo([FromBody] TodoItem todo) //to-do comes from the body of the request
    {
        await _context.Todos.InsertOneAsync(todo);
        return CreatedAtAction(nameof(AddTodo), new { id = todo.Id }, todo);
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> DeleteTodo(string id)
    {
        if (!ObjectId.TryParse(id, out var objectId))
        {
            return BadRequest("Invalid ID format");
        }

        var result = await _context.Todos.DeleteOneAsync(x => x.Id == id);

        if (result.DeletedCount == 0)
        {
            return NotFound("Todo not found");
        }

        return NoContent(); // Successfully deleted
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> UpdateTodo(string id, [FromBody] TodoItem updatedTodo)
    {
        if (!ObjectId.TryParse(id, out var objectId))
        {
            return BadRequest("Invalid ID format");
        }

        var todo = await _context.Todos.Find(x => x.Id == id).FirstAsync();
        if (todo == null)
        {
            return NotFound("Todo not found");
        }

        var update = Builders<TodoItem>.Update.Combine(
            Builders<TodoItem>.Update.Set(x => x.Value, updatedTodo.Value),
            Builders<TodoItem>.Update.Set(x => x.priorityColor, updatedTodo.priorityColor)
        );

        await _context.Todos.UpdateOneAsync(x => x.Id == id, update);

        return Ok(updatedTodo); // Alternatively, return NoContent();
    }
}
namespace WebApplication4.Model
{
// Models/TodoItem.cs
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    public class TodoItem
    {
        public int Id { get; set; }

        public string? Value { get; set; } // Nullable string
        public string? PriorityColor { get; set; } // Nullable string
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
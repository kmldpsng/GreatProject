using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreatProject.Model
{
    [BsonIgnoreExtraElements]
    public class EmployeeFeedsModel
    {
        //public int ID { get; set; }
        [BsonElement("title")]
        public string Title { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
        [BsonElement("location")]
        public string Location { get; set; }
    }
}
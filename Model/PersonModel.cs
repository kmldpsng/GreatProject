using MongoDB.Bson.Serialization.Attributes;
using System;

namespace GreatProject.Model
{
    [BsonIgnoreExtraElements]
    public class PersonModel
    {
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("date_of_bith")]
        public DateTime BirthDate { get; set; }

        [BsonElement("loves")]
        public string[] Likings { get; set; }

        [BsonElement("weight")]
        public string Weight { get; set; }

        [BsonElement("gender")]
        public string Gender { get; set; }

        [BsonElement("votes")]
        public int Votes { get; set; }
    }
}

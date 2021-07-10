using GreatProject.Model;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreatProject.DbContext
{
    public class EmployeeFeedsContext : IEmployeeFeedsContext
    {
        public IEnumerable<PersonModel> FetchData()
        {
            var dbClient = new MongoClient("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false");

            var database = dbClient.GetDatabase("Person");

            var personCollections = database.GetCollection<PersonModel>("personalDetails");

            // x.Name == "Harry Potter"
            var data = personCollections.FindSync(new BsonDocument()).ToList();

            return data;

           // Console.WriteLine(feedsCollection);
           //// return dbClient.ListDatabases().ToList();

           // Console.WriteLine("The list of databases on this server is: ");
           // foreach (var db in dbClient.ListDatabases().ToList())
           // {
           //     Console.WriteLine(db);
           // }

           // return dbClient.ListDatabases().ToList();

        }

    }
}

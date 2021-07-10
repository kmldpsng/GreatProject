using GreatProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreatProject.DbContext
{
    public interface IEmployeeFeedsContext
    {
        public IEnumerable<PersonModel> FetchData();
    }
}

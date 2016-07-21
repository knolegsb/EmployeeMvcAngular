using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EmployeeMvcAngular.Startup))]
namespace EmployeeMvcAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

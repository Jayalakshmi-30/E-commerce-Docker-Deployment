FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

COPY . .
RUN dotnet restore "UserServiceDeployment.sln"
RUN dotnet publish "UserServiceDeployment.sln" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "UserService.dll"]

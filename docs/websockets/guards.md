# Guards

There is no fundamental difference between web sockets guards and [regular HTTP application guards](../overview/guards). The only difference is that instead of throwing `HttpException`, you should use `WsException`.

:::info HINT

The `WsException` class is exposed from `@nestjs/websockets` package.

:::

## Binding guards

The following example uses a method-scoped guard. Just as with HTTP based applications, you can also use gateway-scoped guards (i.e., prefix the gateway class with a `@UseGuards()` decorator).

```ts
@UseGuards(AuthGuard)
@SubscribeMessage('events')
handleEvent(client: Client, data: unknown): WsResponse<unknown> {
  const event = 'events';
  return { event, data };
}
```

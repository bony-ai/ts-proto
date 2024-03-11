/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export const protobufPackage = "bony.api.v1";

export interface CreateCompletionRequest {
  text: string;
}

export interface CreateCompletionResponse {
  text: string;
}

export interface StreamCompletionRequest {
  text: string;
}

export interface StreamCompletionResponse {
  text: string;
}

export interface CreateEmbeddingsRequest {
  text: string;
}

export interface CreateEmbeddingsResponse {
  text: string;
}

function createBaseCreateCompletionRequest(): CreateCompletionRequest {
  return { text: "" };
}

export const CreateCompletionRequest = {
  encode(message: CreateCompletionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCompletionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCompletionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateCompletionRequest {
    return { text: isSet(object.text) ? globalThis.String(object.text) : "" };
  },

  toJSON(message: CreateCompletionRequest): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCompletionRequest>, I>>(base?: I): CreateCompletionRequest {
    return CreateCompletionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCompletionRequest>, I>>(object: I): CreateCompletionRequest {
    const message = createBaseCreateCompletionRequest();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCreateCompletionResponse(): CreateCompletionResponse {
  return { text: "" };
}

export const CreateCompletionResponse = {
  encode(message: CreateCompletionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCompletionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCompletionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateCompletionResponse {
    return { text: isSet(object.text) ? globalThis.String(object.text) : "" };
  },

  toJSON(message: CreateCompletionResponse): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCompletionResponse>, I>>(base?: I): CreateCompletionResponse {
    return CreateCompletionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCompletionResponse>, I>>(object: I): CreateCompletionResponse {
    const message = createBaseCreateCompletionResponse();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseStreamCompletionRequest(): StreamCompletionRequest {
  return { text: "" };
}

export const StreamCompletionRequest = {
  encode(message: StreamCompletionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamCompletionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamCompletionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamCompletionRequest {
    return { text: isSet(object.text) ? globalThis.String(object.text) : "" };
  },

  toJSON(message: StreamCompletionRequest): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamCompletionRequest>, I>>(base?: I): StreamCompletionRequest {
    return StreamCompletionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamCompletionRequest>, I>>(object: I): StreamCompletionRequest {
    const message = createBaseStreamCompletionRequest();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseStreamCompletionResponse(): StreamCompletionResponse {
  return { text: "" };
}

export const StreamCompletionResponse = {
  encode(message: StreamCompletionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamCompletionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamCompletionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamCompletionResponse {
    return { text: isSet(object.text) ? globalThis.String(object.text) : "" };
  },

  toJSON(message: StreamCompletionResponse): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamCompletionResponse>, I>>(base?: I): StreamCompletionResponse {
    return StreamCompletionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamCompletionResponse>, I>>(object: I): StreamCompletionResponse {
    const message = createBaseStreamCompletionResponse();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCreateEmbeddingsRequest(): CreateEmbeddingsRequest {
  return { text: "" };
}

export const CreateEmbeddingsRequest = {
  encode(message: CreateEmbeddingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEmbeddingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEmbeddingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateEmbeddingsRequest {
    return { text: isSet(object.text) ? globalThis.String(object.text) : "" };
  },

  toJSON(message: CreateEmbeddingsRequest): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateEmbeddingsRequest>, I>>(base?: I): CreateEmbeddingsRequest {
    return CreateEmbeddingsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateEmbeddingsRequest>, I>>(object: I): CreateEmbeddingsRequest {
    const message = createBaseCreateEmbeddingsRequest();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCreateEmbeddingsResponse(): CreateEmbeddingsResponse {
  return { text: "" };
}

export const CreateEmbeddingsResponse = {
  encode(message: CreateEmbeddingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEmbeddingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEmbeddingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateEmbeddingsResponse {
    return { text: isSet(object.text) ? globalThis.String(object.text) : "" };
  },

  toJSON(message: CreateEmbeddingsResponse): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateEmbeddingsResponse>, I>>(base?: I): CreateEmbeddingsResponse {
    return CreateEmbeddingsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateEmbeddingsResponse>, I>>(object: I): CreateEmbeddingsResponse {
    const message = createBaseCreateEmbeddingsResponse();
    message.text = object.text ?? "";
    return message;
  },
};

export interface Chat {
  CreateCompletion(request: CreateCompletionRequest): Promise<CreateCompletionResponse>;
  StreamCompletion(request: StreamCompletionRequest): Observable<StreamCompletionResponse>;
}

export class ChatClientImpl implements Chat {
  private readonly rpc: Rpc;
  private readonly service = "bony.api.v1.Chat";
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateCompletion = this.CreateCompletion.bind(this);
    this.StreamCompletion = this.StreamCompletion.bind(this);
  }
  CreateCompletion(request: CreateCompletionRequest): Promise<CreateCompletionResponse> {
    const data = CreateCompletionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateCompletion", data);
    return promise.then((data) => CreateCompletionResponse.decode(_m0.Reader.create(data)));
  }

  StreamCompletion(request: StreamCompletionRequest): Observable<StreamCompletionResponse> {
    const data = StreamCompletionRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "StreamCompletion", data);
    return result.pipe(map((data) => StreamCompletionResponse.decode(_m0.Reader.create(data))));
  }
}

export interface Embeddings {
  CreateEmbeddings(request: CreateEmbeddingsRequest): Promise<CreateEmbeddingsResponse>;
}

export class EmbeddingsClientImpl implements Embeddings {
  private readonly rpc: Rpc;
  private readonly service = "bony.api.v1.Embeddings";
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateEmbeddings = this.CreateEmbeddings.bind(this);
  }
  CreateEmbeddings(request: CreateEmbeddingsRequest): Promise<CreateEmbeddingsResponse> {
    const data = CreateEmbeddingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateEmbeddings", data);
    return promise.then((data) => CreateEmbeddingsResponse.decode(_m0.Reader.create(data)));
  }
}

export class BonyApi {
  private readonly apiKey: string;
  readonly chat: ChatClientImpl;
  readonly embeddings: EmbeddingsClientImpl;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.chat = new ChatClientImpl({ apiKey } as any);
    this.embeddings = new EmbeddingsClientImpl({ apiKey } as any);
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

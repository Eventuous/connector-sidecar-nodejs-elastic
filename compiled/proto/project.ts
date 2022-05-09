/* eslint-disable */
import { messageTypeRegistry } from "../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  UntypedServiceImplementation,
  handleBidiStreamingCall,
} from "@grpc/grpc-js";
import { Any } from "../google/protobuf/any";
import { Struct } from "../google/protobuf/struct";

export const protobufPackage = "projection";

export interface ProjectionRequest {
  $type: "projection.ProjectionRequest";
  eventType: string;
  eventId: string;
  stream: string;
  eventPayload: { [key: string]: any } | undefined;
  metadata: { [key: string]: string };
}

export interface ProjectionRequest_MetadataEntry {
  $type: "projection.ProjectionRequest.MetadataEntry";
  key: string;
  value: string;
}

export interface ProjectionResponse {
  $type: "projection.ProjectionResponse";
  eventId: string;
  operation: Any | undefined;
  metadata: { [key: string]: string };
}

export interface ProjectionResponse_MetadataEntry {
  $type: "projection.ProjectionResponse.MetadataEntry";
  key: string;
  value: string;
}

export interface Ignore {
  $type: "projection.Ignore";
}

export interface Index {
  $type: "projection.Index";
  id: string;
  document: { [key: string]: any } | undefined;
}

export interface Update {
  $type: "projection.Update";
  id: string;
  document: { [key: string]: any } | undefined;
}

export interface UpdateScript {
  $type: "projection.UpdateScript";
  id: string;
  script: Script | undefined;
}

export interface Delete {
  $type: "projection.Delete";
  id: string;
}

export interface Script {
  $type: "projection.Script";
  lang: string;
  source: string;
  params: { [key: string]: any } | undefined;
}

function createBaseProjectionRequest(): ProjectionRequest {
  return {
    $type: "projection.ProjectionRequest",
    eventType: "",
    eventId: "",
    stream: "",
    eventPayload: undefined,
    metadata: {},
  };
}

export const ProjectionRequest = {
  $type: "projection.ProjectionRequest" as const,

  encode(
    message: ProjectionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.eventType !== "") {
      writer.uint32(10).string(message.eventType);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (message.stream !== "") {
      writer.uint32(26).string(message.stream);
    }
    if (message.eventPayload !== undefined) {
      Struct.encode(
        Struct.wrap(message.eventPayload),
        writer.uint32(34).fork()
      ).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      ProjectionRequest_MetadataEntry.encode(
        {
          $type: "projection.ProjectionRequest.MetadataEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventType = reader.string();
          break;
        case 2:
          message.eventId = reader.string();
          break;
        case 3:
          message.stream = reader.string();
          break;
        case 4:
          message.eventPayload = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        case 5:
          const entry5 = ProjectionRequest_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.metadata[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectionRequest {
    return {
      $type: ProjectionRequest.$type,
      eventType: isSet(object.eventType) ? String(object.eventType) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      stream: isSet(object.stream) ? String(object.stream) : "",
      eventPayload: isObject(object.eventPayload)
        ? object.eventPayload
        : undefined,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: ProjectionRequest): unknown {
    const obj: any = {};
    message.eventType !== undefined && (obj.eventType = message.eventType);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.stream !== undefined && (obj.stream = message.stream);
    message.eventPayload !== undefined &&
      (obj.eventPayload = message.eventPayload);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProjectionRequest>, I>>(
    object: I
  ): ProjectionRequest {
    const message = createBaseProjectionRequest();
    message.eventType = object.eventType ?? "";
    message.eventId = object.eventId ?? "";
    message.stream = object.stream ?? "";
    message.eventPayload = object.eventPayload ?? undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(ProjectionRequest.$type, ProjectionRequest);

function createBaseProjectionRequest_MetadataEntry(): ProjectionRequest_MetadataEntry {
  return {
    $type: "projection.ProjectionRequest.MetadataEntry",
    key: "",
    value: "",
  };
}

export const ProjectionRequest_MetadataEntry = {
  $type: "projection.ProjectionRequest.MetadataEntry" as const,

  encode(
    message: ProjectionRequest_MetadataEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectionRequest_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionRequest_MetadataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectionRequest_MetadataEntry {
    return {
      $type: ProjectionRequest_MetadataEntry.$type,
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: ProjectionRequest_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProjectionRequest_MetadataEntry>, I>>(
    object: I
  ): ProjectionRequest_MetadataEntry {
    const message = createBaseProjectionRequest_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ProjectionRequest_MetadataEntry.$type,
  ProjectionRequest_MetadataEntry
);

function createBaseProjectionResponse(): ProjectionResponse {
  return {
    $type: "projection.ProjectionResponse",
    eventId: "",
    operation: undefined,
    metadata: {},
  };
}

export const ProjectionResponse = {
  $type: "projection.ProjectionResponse" as const,

  encode(
    message: ProjectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    if (message.operation !== undefined) {
      Any.encode(message.operation, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      ProjectionResponse_MetadataEntry.encode(
        {
          $type: "projection.ProjectionResponse.MetadataEntry",
          key: key as any,
          value,
        },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        case 2:
          message.operation = Any.decode(reader, reader.uint32());
          break;
        case 3:
          const entry3 = ProjectionResponse_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectionResponse {
    return {
      $type: ProjectionResponse.$type,
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      operation: isSet(object.operation)
        ? Any.fromJSON(object.operation)
        : undefined,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: ProjectionResponse): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.operation !== undefined &&
      (obj.operation = message.operation
        ? Any.toJSON(message.operation)
        : undefined);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProjectionResponse>, I>>(
    object: I
  ): ProjectionResponse {
    const message = createBaseProjectionResponse();
    message.eventId = object.eventId ?? "";
    message.operation =
      object.operation !== undefined && object.operation !== null
        ? Any.fromPartial(object.operation)
        : undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(ProjectionResponse.$type, ProjectionResponse);

function createBaseProjectionResponse_MetadataEntry(): ProjectionResponse_MetadataEntry {
  return {
    $type: "projection.ProjectionResponse.MetadataEntry",
    key: "",
    value: "",
  };
}

export const ProjectionResponse_MetadataEntry = {
  $type: "projection.ProjectionResponse.MetadataEntry" as const,

  encode(
    message: ProjectionResponse_MetadataEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectionResponse_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectionResponse_MetadataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectionResponse_MetadataEntry {
    return {
      $type: ProjectionResponse_MetadataEntry.$type,
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: ProjectionResponse_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ProjectionResponse_MetadataEntry>, I>
  >(object: I): ProjectionResponse_MetadataEntry {
    const message = createBaseProjectionResponse_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ProjectionResponse_MetadataEntry.$type,
  ProjectionResponse_MetadataEntry
);

function createBaseIgnore(): Ignore {
  return { $type: "projection.Ignore" };
}

export const Ignore = {
  $type: "projection.Ignore" as const,

  encode(_: Ignore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ignore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIgnore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Ignore {
    return {
      $type: Ignore.$type,
    };
  },

  toJSON(_: Ignore): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Ignore>, I>>(_: I): Ignore {
    const message = createBaseIgnore();
    return message;
  },
};

messageTypeRegistry.set(Ignore.$type, Ignore);

function createBaseIndex(): Index {
  return { $type: "projection.Index", id: "", document: undefined };
}

export const Index = {
  $type: "projection.Index" as const,

  encode(message: Index, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.document !== undefined) {
      Struct.encode(
        Struct.wrap(message.document),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Index {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.document = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Index {
    return {
      $type: Index.$type,
      id: isSet(object.id) ? String(object.id) : "",
      document: isObject(object.document) ? object.document : undefined,
    };
  },

  toJSON(message: Index): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.document !== undefined && (obj.document = message.document);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Index>, I>>(object: I): Index {
    const message = createBaseIndex();
    message.id = object.id ?? "";
    message.document = object.document ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Index.$type, Index);

function createBaseUpdate(): Update {
  return { $type: "projection.Update", id: "", document: undefined };
}

export const Update = {
  $type: "projection.Update" as const,

  encode(
    message: Update,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.document !== undefined) {
      Struct.encode(
        Struct.wrap(message.document),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Update {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.document = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Update {
    return {
      $type: Update.$type,
      id: isSet(object.id) ? String(object.id) : "",
      document: isObject(object.document) ? object.document : undefined,
    };
  },

  toJSON(message: Update): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.document !== undefined && (obj.document = message.document);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Update>, I>>(object: I): Update {
    const message = createBaseUpdate();
    message.id = object.id ?? "";
    message.document = object.document ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Update.$type, Update);

function createBaseUpdateScript(): UpdateScript {
  return { $type: "projection.UpdateScript", id: "", script: undefined };
}

export const UpdateScript = {
  $type: "projection.UpdateScript" as const,

  encode(
    message: UpdateScript,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.script !== undefined) {
      Script.encode(message.script, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateScript {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.script = Script.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateScript {
    return {
      $type: UpdateScript.$type,
      id: isSet(object.id) ? String(object.id) : "",
      script: isSet(object.script) ? Script.fromJSON(object.script) : undefined,
    };
  },

  toJSON(message: UpdateScript): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.script !== undefined &&
      (obj.script = message.script ? Script.toJSON(message.script) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateScript>, I>>(
    object: I
  ): UpdateScript {
    const message = createBaseUpdateScript();
    message.id = object.id ?? "";
    message.script =
      object.script !== undefined && object.script !== null
        ? Script.fromPartial(object.script)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateScript.$type, UpdateScript);

function createBaseDelete(): Delete {
  return { $type: "projection.Delete", id: "" };
}

export const Delete = {
  $type: "projection.Delete" as const,

  encode(
    message: Delete,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delete {
    return {
      $type: Delete.$type,
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: Delete): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Delete>, I>>(object: I): Delete {
    const message = createBaseDelete();
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(Delete.$type, Delete);

function createBaseScript(): Script {
  return {
    $type: "projection.Script",
    lang: "",
    source: "",
    params: undefined,
  };
}

export const Script = {
  $type: "projection.Script" as const,

  encode(
    message: Script,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lang !== "") {
      writer.uint32(10).string(message.lang);
    }
    if (message.source !== "") {
      writer.uint32(18).string(message.source);
    }
    if (message.params !== undefined) {
      Struct.encode(
        Struct.wrap(message.params),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Script {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lang = reader.string();
          break;
        case 2:
          message.source = reader.string();
          break;
        case 3:
          message.params = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Script {
    return {
      $type: Script.$type,
      lang: isSet(object.lang) ? String(object.lang) : "",
      source: isSet(object.source) ? String(object.source) : "",
      params: isObject(object.params) ? object.params : undefined,
    };
  },

  toJSON(message: Script): unknown {
    const obj: any = {};
    message.lang !== undefined && (obj.lang = message.lang);
    message.source !== undefined && (obj.source = message.source);
    message.params !== undefined && (obj.params = message.params);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Script>, I>>(object: I): Script {
    const message = createBaseScript();
    message.lang = object.lang ?? "";
    message.source = object.source ?? "";
    message.params = object.params ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Script.$type, Script);

export type ProjectionService = typeof ProjectionService;
export const ProjectionService = {
  project: {
    path: "/projection.Projection/Project",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: ProjectionRequest) =>
      Buffer.from(ProjectionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ProjectionRequest.decode(value),
    responseSerialize: (value: ProjectionResponse) =>
      Buffer.from(ProjectionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProjectionResponse.decode(value),
  },
} as const;

export interface ProjectionServer extends UntypedServiceImplementation {
  project: handleBidiStreamingCall<ProjectionRequest, ProjectionResponse>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

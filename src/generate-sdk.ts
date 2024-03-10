import { Context } from "./context";
import { FileDescriptorProto, ServiceDescriptorProto } from "ts-proto-descriptors";
import { code, Code } from "ts-poet";
import { extractFileOptions } from "./schema";
import { camelCaseGrpc } from "./case";

export function generateSdk(
  ctx: Context,
  fileDesc: FileDescriptorProto,
  serviceClientImpls: Record<string, ServiceDescriptorProto>,
): Code {
  const chunks: Code[] = [];
  const fileOptions = extractFileOptions(ctx, fileDesc);
  const sdkName = fileOptions['sdk_name'];

  if (!sdkName) {
    throw new Error('File option `sdk_name` is required');
  }

  chunks.push(code`export class ${sdkName}Sdk {`);
  chunks.push(code`private readonly apiKey: string;`);

  for (const [serviceClientImplClassName, serviceClient] of Object.entries(serviceClientImpls)) {
    chunks.push(code`readonly ${camelCaseGrpc(serviceClient.name)}: ${serviceClientImplClassName};`);
  }

  chunks.push(code`constructor(apiKey: string) {`);
  chunks.push(code`this.apiKey = apiKey;`);
  for (const [serviceClientImplClassName, serviceClient] of Object.entries(serviceClientImpls)) {
    chunks.push(code`this.${camelCaseGrpc(serviceClient.name)} = new ${serviceClientImplClassName}({apiKey} as any);`);
  }
  chunks.push(code`}`);




  chunks.push(code`}`);

  return  code`${chunks}`;
}
